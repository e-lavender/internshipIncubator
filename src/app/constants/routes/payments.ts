export const paymentsApiUrls = {
  createSubscriptions: () => `/api/v1/subscriptions` as const,
  costOfSubscriptions: () => `api/v1/subscriptions/cost-of-subscriptions` as const,
  currentSubscriptions: () => `api/v1/subscriptions/current-subscriptions` as const,
  canceledAutoRenewal: () => `/api/v1/subscriptions/canceled-auto-renewal` as const,
  myPayments: () => `/api/v1/subscriptions/my-payments` as const,
}
