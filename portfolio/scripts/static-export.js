const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Backup the original api folder
console.log('Backing up API routes...');
const apiDir = path.join(__dirname, '../src/app/api');
const apiBackupDir = path.join(__dirname, '../src/app/api-backup');

// Create backup directory
if (fs.existsSync(apiDir)) {
  if (fs.existsSync(apiBackupDir)) {
    fs.rmSync(apiBackupDir, { recursive: true, force: true });
  }
  fs.mkdirSync(apiBackupDir, { recursive: true });
  
  // Copy api directory to backup
  fs.cpSync(apiDir, apiBackupDir, { recursive: true });
  
  // Remove api directory
  fs.rmSync(apiDir, { recursive: true, force: true });
}

try {
  // Build the project
  console.log('Building Next.js project without API routes...');
  execSync('npm run build', { stdio: 'inherit' });
} finally {
  // Restore the original api folder
  console.log('Restoring API routes...');
  if (fs.existsSync(apiBackupDir)) {
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true, force: true });
    }
    fs.renameSync(apiBackupDir, apiDir);
  }
}

console.log('Static export completed successfully!');
