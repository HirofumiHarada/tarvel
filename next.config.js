/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl.airtable.com'],
  },
  output: 'standalone',
  distDir: 'build'
}

module.exports = nextConfig;
