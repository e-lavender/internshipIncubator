export const FRONT_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_FRONT_BASE_URL
    : process.env.DEVELOPMENT_FRONT_BASE_URL
export const PAGE_SIZE_PUBLIC_POSTS_BY_USER = 4
