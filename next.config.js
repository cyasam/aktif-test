/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
    localeDetection: false
  },
  async rewrites() {
    return [
      { 
        source: '/tr/hakkimda',
        destination: '/tr/about',
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
