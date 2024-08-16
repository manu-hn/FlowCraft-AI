/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          port: '',
          pathname: '/**',  // Allows all paths from this hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  