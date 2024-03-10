import { paymentsApiUrls } from '@/app/constants/routes/payments'
import { commonApi } from '@/app/services/common/common.api'
import {
  CostOfSubscriptions,
  CreateSubscriptions,
  CurrentSubscription,
  MyPayments,
} from '@/app/services/payments/payments.types'

const {
  createSubscriptions,
  costOfSubscriptions,
  currentSubscriptions,
  canceledAutoRenewal,
  myPayments,
} = paymentsApiUrls

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
    currentSubscriptions: builder.query<CurrentSubscription, void>({
      query: () => ({
        url: currentSubscriptions(),
        method: 'GET',
      }),
      providesTags: ['Subscriptions'],
    }),
    canceledAutoRenewal: builder.mutation<void, void>({
      query: () => ({
        url: canceledAutoRenewal(),
        method: 'POST',
      }),
      invalidatesTags: ['Subscriptions'],
    }),
    myPayments: builder.query<MyPayments[], void>({
      query: () => ({
        url: myPayments(),
        method: 'GET',
      }),
      providesTags: ['Subscriptions'],
    }),
  }),
})

export const {
  useCreateSubscriptionsMutation,
  useCostOfSubscriptionsQuery,
  useCurrentSubscriptionsQuery,
  useCanceledAutoRenewalMutation,
  useMyPaymentsQuery,
} = paymentsApi
