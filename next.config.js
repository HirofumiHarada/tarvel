/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl.airtable.com'], // 後でAirtableの画像を使用する際に必要
  },
}

module.exports = nextConfig
