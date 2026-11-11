[CmdletBinding()]
param([string]$PackageDirectory)

Set-StrictMode -Version 2
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = New-Object Text.UTF8Encoding($false)
$OutputEncoding = New-Object Text.UTF8Encoding($false)

function Assert-JoinNoReparse {
    param([string]$Path)
    $walk = [IO.Path]::GetFullPath($Path)
    while ($walk) {
        try {
            $attributes = [IO.File]::GetAttributes($walk)
            if (($attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0) {
                throw "연결된 파일/폴더는 사용하지 않습니다: $walk"
            }
        } catch [IO.FileNotFoundException] { }
          catch [IO.DirectoryNotFoundException] { }
        $parent = [IO.Path]::GetDirectoryName($walk)
        if ($parent -eq $walk) { break }
        $walk = $parent
    }
}

function Get-JoinContainedPath {
    param([string]$Root, [string]$Name)
    if ([string]::IsNullOrWhiteSpace($Name) -or
        [IO.Path]::IsPathRooted($Name) -or
        [IO.Path]::GetFileName($Name) -cne $Name -or
        $Name.Contains(':') -or $Name.Contains('/') -or $Name.Contains('\')) {
        throw '파일 이름은 현재 폴더 안의 단순한 이름이어야 합니다.'
    }
    $path = [IO.Path]::GetFullPath((Join-Path $Root $Name))
    $prefix = $Root.TrimEnd('\', '/') + [IO.Path]::DirectorySeparatorChar
    if (-not $path.StartsWith($prefix,
            [StringComparison]::OrdinalIgnoreCase)) {
        throw '파일 경로가 합치기 폴더를 벗어납니다.'
    }
    Assert-JoinNoReparse $path
    return $path
}

function Get-JoinPositiveLength {
    param($Value)
    if ($null -eq $Value -or $Value -is [string] -or $Value -is [bool]) {
        throw 'bytes는 양의 정수여야 합니다.'
    }
    $number = 0L
    $text = [Convert]::ToString($Value, [Globalization.CultureInfo]::InvariantCulture)
    if (-not [long]::TryParse($text, [Globalization.NumberStyles]::None,
            [Globalization.CultureInfo]::InvariantCulture, [ref]$number) -or $number -le 0) {
        throw 'bytes가 올바른 양의 정수 범위를 벗어났습니다.'
    }
    return $number
}

function Get-JoinManifest {
    param([string]$Root)
    $manifestPath = Get-JoinContainedPath $Root 'download-checksums.json'
    if (-not [IO.File]::Exists($manifestPath)) {
        throw '같은 폴더의 download-checksums.json을 찾을 수 없습니다.'
    }
    $utf8 = New-Object Text.UTF8Encoding($false, $true)
    $manifest = [IO.File]::ReadAllText($manifestPath, $utf8) | ConvertFrom-Json
    if ($manifest -is [array] -or
        ($manifest.schemaVersion -isnot [int] -and $manifest.schemaVersion -isnot [long]) -or
        $manifest.schemaVersion -ne 1) {
        throw '지원하지 않는 체크섬 문서 형식입니다.'
    }
    $archiveName = 'A3_Offline_Studio_0_3_Public_Ready.zip'
    if ($manifest.archive.file -isnot [string] -or
        $manifest.archive.file -cne $archiveName) {
        throw 'archive.file 이름이 이번 배포 ZIP 이름과 다릅니다.'
    }
    $null = Get-JoinContainedPath $Root $manifest.archive.file
    $archiveLength = Get-JoinPositiveLength $manifest.archive.bytes
    if ($manifest.archive.sha256 -isnot [string] -or
        $manifest.archive.sha256 -notmatch '^[0-9a-fA-F]{64}$') {
        throw '전체 ZIP의 SHA-256 형식이 올바르지 않습니다.'
    }
    $parts = @($manifest.parts)
    if ($parts.Count -ne 3) { throw '이번 배포는 part01, part02, part03 세 조각이 필요합니다.' }
    $names = New-Object 'Collections.Generic.HashSet[string]' ([StringComparer]::OrdinalIgnoreCase)
    $validated = New-Object 'Collections.Generic.List[object]'
    $total = 0L
    for ($i = 0; $i -lt 3; $i++) {
        $part = $parts[$i]
        $expected = $archiveName + '.part' + ('{0:D2}' -f ($i + 1))
        if ($part.file -isnot [string] -or
            $part.file -cnotmatch '^A3_Offline_Studio_0_3_Public_Ready\.zip\.part0[1-3]$' -or
            $part.file -cne $expected -or -not $names.Add($part.file)) {
            throw '조각 이름, 중복 또는 part01~part03 순서가 올바르지 않습니다.'
        }
        $path = Get-JoinContainedPath $Root $part.file
        $length = Get-JoinPositiveLength $part.bytes
        if ($part.sha256 -isnot [string] -or $part.sha256 -notmatch '^[0-9a-fA-F]{64}$') {
            throw "조각 SHA-256 형식이 올바르지 않습니다: $expected"
        }
        if ($total -gt [long]::MaxValue - $length) { throw '조각 크기 합계가 허용 범위를 벗어났습니다.' }
        $total += $length
        $validated.Add([pscustomobject]@{
            File = $part.file; Path = $path; Bytes = $length
            Sha256 = $part.sha256.ToLowerInvariant()
        })
    }
    if ($total -ne $archiveLength) { throw '조각 크기 합계와 전체 ZIP 크기가 다릅니다.' }
    return [pscustomobject]@{
        File = $archiveName; Bytes = $archiveLength
        Sha256 = $manifest.archive.sha256.ToLowerInvariant()
        Parts = $validated.ToArray()
    }
}

function Get-JoinFileDigest {
    param([string]$Path)
    Assert-JoinNoReparse $Path
    if (-not [IO.File]::Exists($Path)) { throw "필요한 파일을 찾을 수 없습니다: $([IO.Path]::GetFileName($Path))" }
    $stream = $null; $hash = [Security.Cryptography.SHA256]::Create()
    try {
        # Deny writers and renames while reading this file.
        $stream = [IO.File]::Open($Path, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::Read)
        $length = $stream.Length
        $digest = ([BitConverter]::ToString($hash.ComputeHash($stream))).Replace('-', '').ToLowerInvariant()
        if ($stream.Length -ne $length) { throw '검사 중 파일 크기가 바뀌었습니다.' }
        return [pscustomobject]@{ Bytes = $length; Sha256 = $digest }
    } finally {
        if ($stream) { $stream.Dispose() }
        $hash.Dispose()
    }
}

function Test-JoinExpectedArchive {
    param([string]$Path, $Manifest)
    Assert-JoinNoReparse $Path
    if ([IO.Directory]::Exists($Path)) { throw 'ZIP 출력 경로에 폴더가 있어 중지합니다.' }
    if (-not [IO.File]::Exists($Path)) { return $false }
    $actual = Get-JoinFileDigest $Path
    if ($actual.Bytes -ne $Manifest.Bytes -or $actual.Sha256 -ne $Manifest.Sha256) {
        throw '같은 이름의 다른 ZIP이 있습니다. 기존 파일을 덮어쓰거나 삭제하지 않았습니다.'
    }
    return $true
}

function Copy-JoinVerifiedPart {
    param($Part, [IO.Stream]$Destination)
    Assert-JoinNoReparse $Part.Path
    $source = $null; $hash = [Security.Cryptography.SHA256]::Create()
    try {
        $source = [IO.File]::Open($Part.Path, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::Read)
        if ($source.Length -ne $Part.Bytes) { throw "합치기 전 조각 크기가 바뀌었습니다: $($Part.File)" }
        $buffer = New-Object byte[] (1024 * 1024)
        $copied = 0L
        while (($read = $source.Read($buffer, 0, $buffer.Length)) -gt 0) {
            $Destination.Write($buffer, 0, $read)
            [void]$hash.TransformBlock($buffer, 0, $read, $buffer, 0)
            $copied += $read
        }
        [void]$hash.TransformFinalBlock([byte[]]@(), 0, 0)
        $digest = ([BitConverter]::ToString($hash.Hash)).Replace('-', '').ToLowerInvariant()
        if ($copied -ne $Part.Bytes -or $digest -ne $Part.Sha256) {
            throw "합치기 중 조각이 변경됐거나 손상됐습니다: $($Part.File)"
        }
    } finally {
        if ($source) { $source.Dispose() }
        $hash.Dispose()
    }
}

function Invoke-JoinPackage {
    param([Parameter(Mandatory = $true)][string]$Directory)
    $lock = $null; $temporary = $null
    try {
        $root = [IO.Path]::GetFullPath($Directory)
        if ($root.Length -gt [IO.Path]::GetPathRoot($root).Length) { $root = $root.TrimEnd('\', '/') }
        Assert-JoinNoReparse $root
        if (-not [IO.Directory]::Exists($root)) { throw '합치기 폴더가 없습니다.' }
        $lockPath = Get-JoinContainedPath $root '.A3-Package-Join.lock'
        try {
            $lock = [IO.File]::Open($lockPath, [IO.FileMode]::OpenOrCreate,
                [IO.FileAccess]::ReadWrite, [IO.FileShare]::None)
        } catch { throw '같은 폴더에서 합치기가 실행 중이거나 잠금 파일에 접근할 수 없습니다.' }
        $manifest = Get-JoinManifest $root
        $output = Get-JoinContainedPath $root $manifest.File
        for ($i = 0; $i -lt $manifest.Parts.Count; $i++) {
            $part = $manifest.Parts[$i]
            Write-Host ("조각 확인 {0}/3: {1}" -f ($i + 1), $part.File)
            $actual = Get-JoinFileDigest $part.Path
            if ($actual.Bytes -ne $part.Bytes -or $actual.Sha256 -ne $part.Sha256) {
                throw "조각 크기 또는 SHA-256이 다릅니다: $($part.File)"
            }
        }
        if (Test-JoinExpectedArchive $output $manifest) {
            Write-Host '이미 완성된 ZIP의 전체 SHA-256이 일치합니다. 기존 ZIP을 그대로 사용합니다.' -ForegroundColor Green
            Write-Host 'ZIP 압축을 푼 뒤 App 폴더의 시작하기.cmd를 실행하세요.'
            return 0
        }
        $temporary = Get-JoinContainedPath $root ('.' + $manifest.File + '.joining-' + [Guid]::NewGuid().ToString('N') + '.zip')
        $destination = [IO.File]::Open($temporary, [IO.FileMode]::CreateNew,
            [IO.FileAccess]::Write, [IO.FileShare]::None)
        try {
            for ($i = 0; $i -lt $manifest.Parts.Count; $i++) {
                Write-Host ("합치는 중 {0}/3: {1}" -f ($i + 1), $manifest.Parts[$i].File)
                Copy-JoinVerifiedPart $manifest.Parts[$i] $destination
            }
            $destination.Flush($true)
        } finally { $destination.Dispose() }
        Write-Host '합친 ZIP 전체 크기와 SHA-256을 확인합니다. 잠시 기다려 주세요.'
        $combined = Get-JoinFileDigest $temporary
        if ($combined.Bytes -ne $manifest.Bytes -or $combined.Sha256 -ne $manifest.Sha256) {
            throw '합친 ZIP의 전체 크기 또는 SHA-256이 다릅니다. 완성 파일로 게시하지 않았습니다.'
        }
        # File.Move never overwrites a destination created by another process.
        Assert-JoinNoReparse $output
        try { [IO.File]::Move($temporary, $output); $temporary = $null }
        catch [IO.IOException] {
            if (-not (Test-JoinExpectedArchive $output $manifest)) { throw }
            Write-Host '다른 실행에서 만든 동일한 ZIP을 확인했습니다. 기존 ZIP을 그대로 사용합니다.'
        }
        Write-Host ("완료: {0}" -f $manifest.File) -ForegroundColor Green
        Write-Host 'ZIP 압축을 푼 뒤 App 폴더의 시작하기.cmd를 실행하세요.'
        Write-Host '조각 파일은 자동 삭제하지 않았습니다.'
        return 0
    } catch {
        Write-Host ('중지: ' + $_.Exception.Message) -ForegroundColor Red
        Write-Host '조각 파일과 기존 ZIP은 삭제하거나 덮어쓰지 않았습니다.'
        return 1
    } finally {
        if ($temporary -and [IO.File]::Exists($temporary)) {
            try { Assert-JoinNoReparse $temporary; [IO.File]::Delete($temporary) }
            catch { Write-Host ('이번 실행의 임시 파일을 남겼습니다: ' + $temporary) }
        }
        if ($lock) { $lock.Dispose() }
    }
}

if ([string]::IsNullOrWhiteSpace($PackageDirectory)) { $PackageDirectory = $PSScriptRoot }
$joinExitCode = Invoke-JoinPackage -Directory $PackageDirectory
exit ([int]$joinExitCode)
