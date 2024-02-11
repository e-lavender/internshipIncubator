/** @type {{reactStrictMode: boolean, i18n: {defaultLocale: string, locales: string[], localeDetection: boolean}}} */
const nextConfig = {
  env: {
    BASE_API_URL: 'https://inctagram.work',
    DEVELOPMENT_FRONT_BASE_URL: 'http://localhost:3000',
    PRODUCTION_FRONT_BASE_URL: 'https://freedomindz.site',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
        pathname: '/users-inctagram/users/**',
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
