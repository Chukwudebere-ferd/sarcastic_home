/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sarcasticgeeks.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
