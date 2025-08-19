/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Use Next.js Image Optimization for better performance
    unoptimized: false,
  },
  experimental: {
    // Prefer tree-shakeable ESM where possible
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
