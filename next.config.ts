import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures static export for GitHub Pages
  basePath: "/road-damage-app", // Must match the GitHub repo name
  assetPrefix: "/road-damage-app/", // Ensures correct asset loading
  images: {
    unoptimized: true, // Disable image optimization (necessary for static export)
  },
  trailingSlash: true, // Ensures all links end with `/`, preventing routing issues
};

export default nextConfig;
