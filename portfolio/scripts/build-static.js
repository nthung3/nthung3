const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the project
console.log('Building Next.js project...');
execSync('npm run build', { stdio: 'inherit' });

// Path to the output directory
const outDir = path.join(__dirname, '../out');

// Find and remove API routes
console.log('Removing API routes from static export...');
const removeAPIRoutes = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name === 'api') {
        console.log(`Removing API directory: ${fullPath}`);
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        removeAPIRoutes(fullPath);
      }
    }
  }
};

removeAPIRoutes(outDir);
console.log('Static export completed successfully!');
