export const paymentsApiUrls = {
  canceledAutoRenewal: () => `/api/v1/subscriptions/canceled-auto-renewal` as const,
  costOfSubscriptions: () => `/api/v1/subscriptions/cost-of-payment-subscriptions` as const,
  createSubscriptions: () => `/api/v1/subscriptions` as const,
  currentSubscriptions: () => `/api/v1/subscriptions/current-payment-subscriptions` as const,
  myPayments: () => `/api/v1/subscriptions/my-payments` as const,
}
