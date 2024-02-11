export const FRONT_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_FRONT_BASE_URL
    : process.env.DEVELOPMENT_FRONT_BASE_URL
