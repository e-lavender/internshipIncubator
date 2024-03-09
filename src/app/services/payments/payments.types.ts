export type CreateSubscriptions = {
  typeSubscription: 'MONTHLY' | 'DAY' | 'WEEKLY'
  paymentType: 'STRIPE' | 'PAYPAL'
  amount: number
  baseUrl: string
}

export type CostOfSubscriptions = {
  data: CostOfSubscriptionsData[]
}
export type CostOfSubscriptionsData = {
  amount: number
  typeDescription: string
}
export type SubscriptionOptions = {
  id: number
  value: string
  amount: number
  typeSubscription: 'MONTHLY' | 'DAY' | 'WEEKLY'
  disabled?: boolean
}

export type CurrentSubscriptionType = {
  data: CurrentSubscriptionTypeData[]
  hasAutoRenewal: boolean
}
export type CurrentSubscriptionTypeData = {
  userId: number
  subscriptionId: string
  dateOfPayment: string
  endDateOfSubscription: string
  autoRenewal: boolean
}

export type SubscriptionDuration = 'MONTHLY' | 'DAY' | 'WEEKLY'
