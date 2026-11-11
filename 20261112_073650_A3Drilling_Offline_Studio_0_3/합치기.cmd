@echo off
setlocal DisableDelayedExpansion
chcp 65001 >nul
echo A3 Offline Studio 0.3 - Verify and join download parts
set "A3_JOIN_SCRIPT=%~dp0Join-Package.ps1"
set "A3_JOIN_DIRECTORY=%~dp0"
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; try { $joinText=[IO.File]::ReadAllText($env:A3_JOIN_SCRIPT,[Text.Encoding]::UTF8); & ([ScriptBlock]::Create($joinText)) -PackageDirectory $env:A3_JOIN_DIRECTORY } catch { Write-Host ('Join stopped: ' + $_.Exception.Message); exit 1 }"
set "A3_JOIN_RESULT=%ERRORLEVEL%"
echo.
if not defined A3_JOIN_NO_PAUSE pause
exit /b %A3_JOIN_RESULT%
