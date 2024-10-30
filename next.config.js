/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dl.airtable.com'], // 後でAirtableの画像を使用する際に必要
  },
  distDir: '.next', // 出力ディレクトリを明示的に指定
}

module.exports = nextConfig;
