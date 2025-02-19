/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  // Disable server-side features since we're exporting to static HTML
  trailingSlash: true,
  basePath: '/Fischer-Finctech',
  assetPrefix: '/Fischer-Finctech',
}

module.exports = nextConfig
