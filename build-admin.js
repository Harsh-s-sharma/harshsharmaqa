const { execSync } = require('child_process');
const fs = require('fs');

// Create a temporary next.config.js that handles admin pages
const tempConfig = `
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.harshsharmaqa.tech',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase'],
  },
};

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
