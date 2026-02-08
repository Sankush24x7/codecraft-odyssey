@echo off
echo.
echo 🎮 CodeCraft Odyssey - Quick Start
echo ==================================
echo.

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not found!
    echo 📥 Please install Node.js 18+ from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Check dependencies
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install
    
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Dependencies installed successfully!
    ) else (
        echo ❌ Failed to install dependencies
        echo 💡 Try: npm install --legacy-peer-deps
        pause
        exit /b 1
    )
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🚀 Starting development server...
echo.
echo 📍 Server will be available at:
echo    http://localhost:4321
echo.
echo 💡 Press Ctrl+C to stop the server
echo.
echo ==================================
echo.

REM Start dev server
call npm run dev
