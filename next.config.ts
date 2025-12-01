import type { NextConfig } from 'next';

// Trigger CI/CD workflow ⬅️ added for GitHub Actions
const nextConfig: NextConfig = {
  output: "export",                     // ⬅️ REQUIRED for static export
  images: {
    unoptimized: true,                  // ⬅️ REQUIRED for next export
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
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
