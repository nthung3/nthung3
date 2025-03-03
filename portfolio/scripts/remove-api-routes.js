const fs = require('fs');
const path = require('path');

// Remove API routes
console.log('Removing API routes for static export...');
const apiDir = path.join(__dirname, '../src/app/api');

if (fs.existsSync(apiDir)) {
  fs.rmSync(apiDir, { recursive: true, force: true });
  console.log('API routes removed successfully.');
} else {
  console.log('No API routes directory found.');
}
