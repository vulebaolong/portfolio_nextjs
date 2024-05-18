/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'firebasestorage.googleapis.com',
              // port: '6969',
              pathname: '/*/**',
          },
      ],
  },
};

export default nextConfig;
