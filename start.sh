#!/bin/bash

# CodeCraft Odyssey - Quick Start Script
# This script helps you get started quickly

echo "🎮 CodeCraft Odyssey - Quick Start"
echo "=================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js not found!"
    echo "📥 Please install Node.js 18+ from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is $NODE_VERSION, need 18+"
    echo "📥 Please update Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully!"
    else
        echo "❌ Failed to install dependencies"
        echo "💡 Try: npm install --legacy-peer-deps"
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting development server..."
echo ""
echo "📍 Server will be available at:"
echo "   http://localhost:4321"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""
echo "=================================="
echo ""

# Start dev server
npm run dev
