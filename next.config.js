/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/Fischer-Finctech' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Fischer-Finctech/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
