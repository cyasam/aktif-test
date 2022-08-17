/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'tr-TR'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',    
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/en/about',
      },
      {
        source: '/hakkimda',
        destination: '/tr/about',
      },
    ]
  },
}

module.exports = nextConfig
