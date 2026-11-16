@echo off
setlocal
set "TASK_A3_PS=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if exist "%SystemRoot%\Sysnative\WindowsPowerShell\v1.0\powershell.exe" set "TASK_A3_PS=%SystemRoot%\Sysnative\WindowsPowerShell\v1.0\powershell.exe"
"%TASK_A3_PS%" -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0Start-OfflineStudio.ps1"
set "TASK_A3_EXIT=%errorlevel%"
if not "%TASK_A3_EXIT%"=="0" pause
exit /b %TASK_A3_EXIT%
