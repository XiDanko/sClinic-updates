@echo off
for /f "delims=" %%i in ('php -r "echo sg_get_machine_id();"') do set "MACHINE_ID=%%i"

echo Machine ID: %MACHINE_ID%
<nul set /p "=%MACHINE_ID%" | clip
echo [Copied to clipboard]
echo:
pause
