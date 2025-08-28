/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export', // Enables static export for Hostinger shared hosting
  trailingSlash: true, // Helps with Hostinger routing
  basePath: process.env.BASEPATH || '', // Optional: set base path if deploying to subdirectory

  // Disable image optimization for static export (Hostinger doesn't support Next.js server)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      }
    ]
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://your-api-url.com'
  }
}

export default nextConfig
