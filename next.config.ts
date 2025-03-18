import { NextConfig } from 'next'

const nextConfig = {
  output: 'export',  // This is critical for GitHub Pages
  basePath: '/road-damage-app', // Must match your repository name
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove or comment out experimental features for static export
  // experimental: {
  //   serverActions: true,
  // },
}

module.exports = nextConfig