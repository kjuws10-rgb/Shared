param([switch]$CheckOnly, [string]$RuntimeDirectory)
$ErrorActionPreference = 'Stop'
$taskAppRoot = $PSScriptRoot
$taskExe = Join-Path $taskAppRoot 'A3.OfflineStudio.exe'
$taskInstaller = Join-Path $taskAppRoot 'Prerequisites\vc_redist.x64.exe'
$taskMetadata = Join-Path $taskAppRoot 'Prerequisites\manifest.json'
if ($RuntimeDirectory -and -not $CheckOnly) { throw 'RuntimeDirectory is a read-only diagnostic option. Use -CheckOnly with it.' }
if (-not $RuntimeDirectory) { $RuntimeDirectory = [Environment]::GetFolderPath('System') }
$taskMinimum = [Version]'14.42.34438.0'
$taskMissing = @()
$taskOld = @()
foreach ($taskName in @('VCRUNTIME140.dll','VCRUNTIME140_1.dll','MSVCP140.dll')) {
    $taskDll = Join-Path $RuntimeDirectory $taskName
    if (-not (Test-Path -LiteralPath $taskDll -PathType Leaf)) { $taskMissing += $taskName; continue }
    $taskVersion = [Diagnostics.FileVersionInfo]::GetVersionInfo($taskDll).FileVersion -as [Version]
    if (-not $taskVersion -or $taskVersion -lt $taskMinimum) { $taskOld += $taskName }
}
$taskPlan = [ordered]@{ windowsX64 = [Environment]::Is64BitOperatingSystem; appPresent = (Test-Path -LiteralPath $taskExe -PathType Leaf); missing = $taskMissing; olderThanTested = $taskOld; installerPresent = (Test-Path -LiteralPath $taskInstaller -PathType Leaf); needsSetup = ($taskMissing.Count -gt 0 -or $taskOld.Count -gt 0); minimumTestedVersion = $taskMinimum.ToString() }
if ($CheckOnly) { $taskPlan | ConvertTo-Json -Depth 4; exit 0 }
if (-not $taskPlan.windowsX64 -or -not $taskPlan.appPresent) { throw 'Use the complete Windows x64 App folder.' }
if ($taskPlan.needsSetup) {
    if (-not $taskPlan.installerPresent -or -not (Test-Path -LiteralPath $taskMetadata -PathType Leaf)) { throw 'The offline Microsoft Visual C++ x64 installer is missing from Prerequisites.' }
    $taskManifest = Get-Content -LiteralPath $taskMetadata -Raw | ConvertFrom-Json
    $taskHash = (Get-FileHash -LiteralPath $taskInstaller -Algorithm SHA256).Hash
    if ($taskHash -ne $taskManifest.sha256) { throw 'The prerequisite installer does not match the prepared SHA256.' }
    $taskSignature = Get-AuthenticodeSignature -LiteralPath $taskInstaller
    if ($taskSignature.Status -ne 'Valid' -or $taskSignature.SignerCertificate.Subject -notmatch 'O=Microsoft Corporation') { throw 'The prerequisite installer must have a valid Microsoft signature.' }
    Write-Host 'Microsoft Visual C++ x64 setup is needed once. Complete its setup window; administrator approval may be required.'
    # Interactive setup keeps the license, UAC decision and any cancellation under user control.
    $taskSetup = Start-Process -FilePath $taskInstaller -ArgumentList '/norestart' -Verb RunAs -PassThru -Wait
    if ($taskSetup.ExitCode -notin @(0,3010)) { throw ('Runtime setup was not completed. Exit code: ' + $taskSetup.ExitCode) }
    if ($taskSetup.ExitCode -eq 3010) { Write-Host 'The installer requested a restart. Restart Windows before using the model.'; exit 3010 }
}
Start-Process -FilePath $taskExe -WorkingDirectory $taskAppRoot -WindowStyle Hidden
