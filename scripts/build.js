const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create a temporary next.config.js that excludes admin pages from static generation
const tempConfig = `
const nextConfig = require('../next.config.ts').default;

// Override the config to exclude admin pages from static generation
nextConfig.generateStaticParams = false;
nextConfig.trailingSlash = false;

module.exports = nextConfig;
`;

fs.writeFileSync('next.config.temp.js', tempConfig);

try {
  // Run the build with the temporary config
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} finally {
  // Clean up the temporary config file
  if (fs.existsSync('next.config.temp.js')) {
    fs.unlinkSync('next.config.temp.js');
  }
}
