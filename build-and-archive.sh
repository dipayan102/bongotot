#!/bin/bash

# Bongotot Build and Archive Script
# This script builds the web application and creates a ZIP archive for deployment to Hostinger.

echo "🚀 Starting build process..."

# Navigate to the project root (where this script is located)
# cd "$(dirname "$0")/.."

# Build the project using the root npm command
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Define the build output directory
    BUILD_DIR="dist/apps/web"
    ZIP_NAME="bongotot-build.zip"
    
    echo "📦 Archiving build artifacts from $BUILD_DIR..."
    
    # Remove existing zip if it exists
    rm -f "$ZIP_NAME"
    
    # Create the zip file from the contents of the build directory
    # We cd into the directory first so the zip doesn't contain the full path
    (cd "$BUILD_DIR" && zip -r "../../$ZIP_NAME" .)
    
    if [ $? -eq 0 ]; then
        echo "------------------------------------------------"
        echo "🎉 Success! Archive created: $ZIP_NAME"
        echo "------------------------------------------------"
        echo "Deployment Instructions for Hostinger:"
        echo "1. Log in to your Hostinger Control Panel."
        echo "2. Go to the File Manager for your domain."
        echo "3. Upload '$ZIP_NAME' to the 'public_html' directory."
        echo "4. Right-click '$ZIP_NAME' and select 'Extract'."
        echo "5. Your site should now be live!"
        echo "------------------------------------------------"
    else
        echo "❌ Archiving failed."
        exit 1
    fi
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
