import type { NextConfig } from "next";

const exportPathMap = require('./next-export-map');

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during production build
    ignoreBuildErrors: true,
  },
  output: 'export',
  // Enable images for static export
  images: {
    unoptimized: true,
  },
  // Use trailing slashes in URLs
  trailingSlash: true,
  // Use our custom export map to exclude API routes
  exportPathMap,
};

export default nextConfig;
