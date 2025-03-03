#!/bin/bash

# Build the static site
echo "Building the static site..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
echo "Note: You will need to authenticate with Vercel if not already logged in"
vercel --prod
