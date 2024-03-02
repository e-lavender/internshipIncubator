import { paymentsApiUrls } from '@/app/constants/routes/payments'
import { commonApi } from '@/app/services/common/common.api'
import { CostOfSubscriptions, CreateSubscriptions } from '@/app/services/payments/payments.types'

const { createSubscriptions, costOfSubscriptions } = paymentsApiUrls

export const paymentsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    createSubscriptions: builder.mutation<{ url: string }, CreateSubscriptions>({
      query: body => ({
        url: createSubscriptions(),
        method: 'POST',
        body,
      }),
    }),
    costOfSubscriptions: builder.query<CostOfSubscriptions, void>({
      query: () => ({
        url: costOfSubscriptions(),
        method: 'GET',
      }),
      providesTags: ['Subscriptions'],
    }),
  }),
})

export const { useCreateSubscriptionsMutation, useCostOfSubscriptionsQuery } = paymentsApi
