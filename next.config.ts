import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Skip type checking during builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // Run ESLint only during development builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
