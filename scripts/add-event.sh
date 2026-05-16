#!/bin/bash

# Script to add a new event folder to the Bongotot timeline
# Location: scripts/add-event.sh

set -e

# Help function
show_help() {
    echo "Bongotot Timeline Event Creator"
    echo "=============================="
    echo "Usage: ./scripts/add-event.sh \"<name>\" <month> <year> [image_path]"
    echo ""
    echo "Parameters:"
    echo "  name       : Name of the event (quote if it contains spaces)"
    echo "  month      : Month (e.g., Jan, Feb, October, etc.)"
    echo "  year       : 4-digit year (e.g., 2024)"
    echo "  image_path : (Optional) Path to an image file to move to the new folder"
    echo ""
    echo "Example:"
    echo "  ./scripts/add-event.sh \"Durga Puja\" Oct 2025 ./my_photo.jpg"
    echo ""
    echo "This will create a folder in apps/web/src/assets/events/ following the naming scheme."
}

# Check for help flag
if [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]]; then
    show_help
    exit 0
fi

# Check for correct number of arguments (3 or 4)
if [ "$#" -lt 3 ] || [ "$#" -gt 4 ]; then
    echo "Error: Incorrect number of arguments."
    show_help
    exit 1
fi

NAME="$1"
MONTH="$2"
YEAR="$3"
IMAGE_PATH="$4"

# Validate year format (basic 4-digit check)
if ! [[ "$YEAR" =~ ^[0-9]{4}$ ]]; then
    echo "Error: Year must be a 4-digit number (e.g., 2024)."
    exit 1
fi

# Format the folder name
# 1. Lowercase
# 2. Replace spaces/hyphens with underscores
# 3. Remove any other special characters that might break things
CLEAN_NAME=$(echo "$NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[[:space:]]/_/g' | sed 's/-/_/g' | sed 's/[^a-z0-9_]//g')
CLEAN_MONTH=$(echo "$MONTH" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z]//g')

FOLDER_NAME="${CLEAN_NAME}_${CLEAN_MONTH}_${YEAR}"
TARGET_PATH="apps/web/src/assets/events/$FOLDER_NAME"

# Check if directory exists
if [ -d "$TARGET_PATH" ]; then
    echo "Error: Folder '$FOLDER_NAME' already exists at $TARGET_PATH"
    exit 1
fi

# Create the directory
mkdir -p "$TARGET_PATH"

# Handle image move if provided
if [ -n "$IMAGE_PATH" ]; then
    if [ -f "$IMAGE_PATH" ]; then
        mv "$IMAGE_PATH" "$TARGET_PATH/"
        echo "Moved image: $(basename "$IMAGE_PATH") -> $TARGET_PATH/"
    else
        echo "Warning: Image file '$IMAGE_PATH' not found. Skipping image move."
    fi
fi

echo "----------------------------------------------------"
echo "Event folder created successfully!"
echo "Path: $TARGET_PATH"
echo "----------------------------------------------------"
echo "Instructions:"
echo "1. Copy any additional JPG, PNG, or WEBP images into the folder above."
echo "2. The timeline will automatically detect them on the next refresh (in dev) or build."
echo "----------------------------------------------------"
