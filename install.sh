#!/bin/bash

# JR Shop Commerce - Installation Script
# This script sets up the development environment

echo "🚀 JR Shop Commerce - Setup Script"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm"
    exit 1
fi

echo "✅ npm is installed: $(npm -v)"

# Install Expo CLI globally
echo ""
echo "📦 Installing Expo CLI..."
npm install -g expo-cli

echo "✅ Expo CLI installed"

# Install project dependencies
echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "🎉 Next steps:"
echo "1. Configure .env file: cp .env.example .env"
echo "2. Update API URLs in .env"
echo "3. Start development: npm start"
echo ""
echo "📱 Run on device:"
echo "   - Android: npm run android"
echo "   - iOS: npm run ios"
echo "   - Web: npm run web"
echo ""
