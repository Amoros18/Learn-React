import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    ignoreDuringBuilds: true,
  },
  /* config options here */
  // experimental: {
  //   ppr: 'incremental',
  // },
};

export default nextConfig;
