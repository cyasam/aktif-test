/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  async rewrites() {
    return [
      { 
        source: '/tr/hakkimda',
        destination: '/tr/about',
        locale: false,
      },
      { 
        source: '/tr/iletisim',
        destination: '/tr/contact',
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
