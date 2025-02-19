/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: process.env.GITHUB_ACTIONS ? '/Fischer-Finctech' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Fischer-Finctech/' : '',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig
