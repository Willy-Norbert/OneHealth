/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["www.shutterstock.com"], // ✅ allow external images from Shutterstock
  },
};

module.exports = nextConfig;
