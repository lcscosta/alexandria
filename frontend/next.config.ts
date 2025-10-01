import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // static HTML export
  distDir: "out",         // Output directory
  images: {
    unoptimized: true,
  },
  basePath: "",           //  Set if deploying to a subpath
  assetPrefix: "",        // CDN prefix for assets
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
