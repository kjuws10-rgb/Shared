param(
 [string]$ReportRoot,
 [string]$SourceRoot,
 [string]$SourceCommit
)
$ErrorActionPreference = 'Stop'
$issues = [System.Collections.Generic.List[string]]::new()
$markdown = @(Get-ChildItem -LiteralPath $ReportRoot -Filter '*.md' -File)
$localCount = 0
$sourceCount = 0
$sourceLinks = [System.Collections.Generic.HashSet[string]]::new()
$diagramCount = 0
$nodeCount = 0
foreach ($file in $markdown) {
 $body = [System.IO.File]::ReadAllText($file.FullName)
 if ($body.Contains([char]0xfffd) -or $body -match '[\x00-\x08\x0b\x0c\x0e-\x1f]') { $issues.Add("Invalid characters: $($file.Name)") }
 $fences = [regex]::Matches($body, '(?m)^' + [char]96 + [char]96 + [char]96)
 if ($fences.Count % 2 -ne 0) { $issues.Add("Unbalanced fences: $($file.Name)") }
 foreach ($match in [regex]::Matches($body, '\[[^\]\r\n]*\]\(([^)]+)\)')) {
  $target = $match.Groups[1].Value
  if ($target -match '^https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/([^/]+)/([^#]+)#L(\d+)-L(\d+)$') {
   $sourceCount++
   [void]$sourceLinks.Add($target)
   $commit = $Matches[1]; $relative = $Matches[2]; $from = [int]$Matches[3]; $to = [int]$Matches[4]
   $path = Join-Path $SourceRoot $relative
   if ($commit -ne $SourceCommit) { $issues.Add("Wrong source pin: $target") }
   if (-not (Test-Path -LiteralPath $path -PathType Leaf)) { $issues.Add("Missing source: $target"); continue }
   $lines = [System.IO.File]::ReadAllLines($path).Count
   if ($from -lt 1 -or $to -lt $from -or $to -gt $lines) { $issues.Add("Invalid range: $target / $lines") }
  } elseif ($target -notmatch '^https?://|^#') {
   $localCount++
   $relativeTarget = ($target -split '#')[0]
   $path = [System.IO.Path]::GetFullPath((Join-Path $file.DirectoryName $relativeTarget))
   if (-not (Test-Path -LiteralPath $path)) { $issues.Add("Missing internal target: $($file.Name) $target") }
  }
 }
 $pattern = '(?ms)^' + [char]96 + [char]96 + [char]96 + 'mermaid\r?\n(.*?)^' + [char]96 + [char]96 + [char]96
 foreach ($diagram in [regex]::Matches($body,$pattern)) {
  $diagramCount++
  $content = $diagram.Groups[1].Value
  $known = [System.Collections.Generic.HashSet[string]]::new()
  foreach ($node in [regex]::Matches($content,'\b([A-Z][A-Z0-9_]*)\s*[\[\{]')) { [void]$known.Add($node.Groups[1].Value) }
  $nodeCount += $known.Count
  if ($content -notmatch '^flowchart (TD|LR)') { $issues.Add("Unknown Mermaid header in $($file.Name)") }
  foreach ($line in ($content -split '\r?\n' | Select-Object -Skip 1)) {
   if ([string]::IsNullOrWhiteSpace($line)) { continue }
   if ($line -notmatch '-->|\.->') { $issues.Add("Unexpected Mermaid line: $line") }
   if ($line -notmatch '^\s*([A-Z][A-Z0-9_]*)') { $issues.Add("No Mermaid start node: $line"); continue }
   if (-not $known.Contains($Matches[1])) { $issues.Add("Unknown start node: $line") }
   if ($line -match '(?:-->(?:\|[^|]*\|)?|\.->)\s*([A-Z][A-Z0-9_]*)') {
    if (-not $known.Contains($Matches[1])) { $issues.Add("Unknown target node: $line") }
   } else { $issues.Add("No Mermaid target: $line") }
  }
 }
}
$allChanges = @(Get-Content -LiteralPath (Join-Path $ReportRoot 'evidence/all_changes.tsv')).Count
$sourceChanges = @(Get-Content -LiteralPath (Join-Path $ReportRoot 'evidence/source_changes.tsv')).Count
$tests = Get-Content -LiteralPath (Join-Path $ReportRoot 'evidence/verification_results.json') -Raw | ConvertFrom-Json
$passed = @($tests.checks | Where-Object passed).Count
if ($markdown.Count -ne 7 -or $allChanges -ne 1208 -or $sourceChanges -ne 68 -or $passed -ne 14) { $issues.Add('Unexpected document / inventory / test count') }
$result = [ordered]@{
 pass=($issues.Count -eq 0)
 markdownFiles=$markdown.Count
 internalLinks=$localCount
 pinnedSourceLinks=$sourceCount
 uniquePinnedSourceLinks=$sourceLinks.Count
 sourceFilesAndLineRangesChecked=$true
 codeFencePairsChecked=$true
 invalidCharacterCheck=$true
 mermaidDiagrams=$diagramCount
 mermaidNodes=$nodeCount
 mermaidValidation='text structure and node references only; not rendered'
 allChangedFiles=$allChanges
 sourceAndSolutionFiles=$sourceChanges
 softwareChecks=$passed
 sourceCommit=$SourceCommit
 issues=@($issues)
}
$result | ConvertTo-Json -Depth 5
if ($issues.Count -gt 0) { exit 1 }
