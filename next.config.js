/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig
