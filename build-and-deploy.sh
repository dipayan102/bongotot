#!/bin/bash

# Bongotot Build and Archive Script
# This script builds the web application, creates a ZIP archive, 
# and uploads it to Hostinger via SSH.

# Hostinger Configuration
REMOTE_HOST="89.117.139.221"
REMOTE_PORT="65002"
REMOTE_USER="u657664034"
REMOTE_PATH="/home/u657664034/domains/bongotot.org/public_html"
ZIP_NAME="bongotot-build.zip"

echo "🚀 Starting build process..."

# Build the project using the root npm command
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Define the build output directory
    BUILD_DIR="dist/apps/web"
    
    echo "📦 Archiving build artifacts from $BUILD_DIR..."
    
    # Remove existing zip if it exists
    rm -f "$ZIP_NAME"
    
    # Create the zip file from the contents of the build directory
    # We cd into the directory first so the zip doesn't contain the full path
    (cd "$BUILD_DIR" && zip -r "../../../$ZIP_NAME" .)
    
    if [ $? -eq 0 ]; then
        echo "📤 Uploading $ZIP_NAME to Hostinger..."
        
        # Upload via SCP
        scp -P "$REMOTE_PORT" "$ZIP_NAME" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"
        
        if [ $? -eq 0 ]; then
            echo "✅ Upload successful!"
            
            echo "🔧 Extracting files on remote server..."
            # SSH into server to unzip and then remove the zip on server
            ssh -p "$REMOTE_PORT" "$REMOTE_USER@$REMOTE_HOST" "cd $REMOTE_PATH && unzip -o $ZIP_NAME && rm $ZIP_NAME"
            
            if [ $? -eq 0 ]; then
                echo "✨ Deployment complete! Files extracted on Hostinger."
                
                # Delete local zip file
                echo "🧹 Cleaning up local archive..."
                rm "$ZIP_NAME"
                
                echo "------------------------------------------------"
                echo "🎉 All done! Your site should now be live."
                echo "------------------------------------------------"
            else
                echo "⚠️ Upload was successful, but remote extraction failed."
                echo "Please check the SSH connection or zip/unzip availability on the server."
                exit 1
            fi
        else
            echo "❌ Upload failed. Please check your SSH credentials and connection."
            exit 1
        fi
    else
        echo "❌ Archiving failed."
        exit 1
    fi
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
