/** @type {{reactStrictMode: boolean, i18n: {defaultLocale: string, locales: string[], localeDetection: boolean}}} */
const nextConfig = {
  env: {
    BASE_API_URL: 'https://inctagram.work',
    DEVELOPMENT_FRONT_BASE_URL: 'http://localhost:3000',
    PRODUCTION_FRONT_BASE_URL: 'https://freedomindz.site',
    NEXT_PUBLIC_RECAPTCHA_SECRET_KEY: `6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ`,
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
