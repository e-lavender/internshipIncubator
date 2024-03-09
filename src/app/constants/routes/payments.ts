export const paymentsApiUrls = {
  createSubscriptions: () => `/api/v1/subscriptions` as const,
  costOfSubscriptions: () => `api/v1/subscriptions/cost-of-subscriptions` as const,
  currentSubscriptions: () => `api/v1/subscriptions/current-subscriptions` as const,
}
