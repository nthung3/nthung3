import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for external images
  images: {
    domains: ['www.notion.so', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24 hours
    unoptimized: process.env.NODE_ENV === 'production' // Enable unoptimized images for static export
  },
  
  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Enable strict mode for additional checks during development
  reactStrictMode: true,
  
  // Compiler optimizations
  compiler: {
    // Remove console.* in production except console.error
    removeConsole: process.env.NODE_ENV === 'production' 
      ? { exclude: ['error'] }
      : false
  },
  
  // Enable experimental features for better performance
  experimental: {
    // These optimizations are subject to change in newer Next.js versions
    optimizeCss: true, // CSS optimization
    optimizeServerReact: true,
  },
  
  // Enable static exports
  output: 'export', // Changed from 'standalone' to 'export' for static site generation
  
  // Configure compression for faster load times
  compress: true,
  
  // Disable server components for static export compatibility
  // This is required for next export
  distDir: 'out',
  
  // Trailing slashes for better compatibility with static hosting
  trailingSlash: true,
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
