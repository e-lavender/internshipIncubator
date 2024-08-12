export const FRONT_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_FRONT_BASE_URL
    : process.env.DEVELOPMENT_FRONT_BASE_URL
export const PAGE_SIZE_PUBLIC_POSTS_BY_USER = 4

export const PAYMENT_TYPE = {
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
} as const

export const WS_EVENT_PATH = {
  ERROR: 'error',
  MESSAGE_DELETED: 'message-sent',
  MESSAGE_SENT: 'message-deleted',
  NOTIFICATIONS: 'notifications',
  RECEIVE_MESSAGE: 'receive-message',
  UPDATE_MESSAGE: 'update-message',
} as const
