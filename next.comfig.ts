import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* existing config options */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'storage.googleapis.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'collection.cloudinary.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', port: '', pathname: '/**' },
    ],
  },

  // ✅ Add this line to enable static export
  output: 'export',
};

export default nextConfig;
