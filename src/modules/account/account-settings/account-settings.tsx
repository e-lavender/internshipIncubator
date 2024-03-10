import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import s from './account-settings.module.scss'

import { Nullable, PaypalIcon, StripeIcon, useDisclose, useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { subscriptionDate } from '@/app/helpers/customizeDate'
import {
  useCanceledAutoRenewalMutation,
  useCostOfSubscriptionsQuery,
  useCreateSubscriptionsMutation,
  useCurrentSubscriptionsQuery,
} from '@/app/services/payments/payments.api'
import { SubscriptionDuration, SubscriptionOptions } from '@/app/services/payments/payments.types'
import { PaymentsModal } from '@/components/modals/payments-modal'
import { Card, Checkbox, RadioContainer, RadioItem, Typography } from '@/ui'

export const AccountSettings = () => {
  // Added state for demonstration purposes of flow
  //const [accountType, setAccountType] = useState('')
  const [subscription, setSubscription] = useState<string | null>(null)
  const [subscriptionId, setSubscriptionId] = useState<number>(0)
  const [subscriptionOptions, setSubscriptionOptions] =
    useState<Nullable<SubscriptionOptions[]>>(null)
  const [createSubscriptions] = useCreateSubscriptionsMutation()
  const { data: costOfSubscription } = useCostOfSubscriptionsQuery()
  const { data: currentSubscriptions } = useCurrentSubscriptionsQuery()

  const { t } = useTranslation()
  const { query } = useRouter()
  const {
    accountType,
    yourSubscriptionCosts,
    per,
    month,
    oneDay,
    sevenDays,
    or,
    personal,
    business,
  } = t.account
  const PROFILE_TYPE = [
    { label: 'personal', value: `${personal}`, id: 1 },
    { label: 'business', value: `${business}`, id: 2 },
  ]
  const [accountTypeId, setAccountTypeId] = useState<number>(PROFILE_TYPE[0].id)

  const hasPaymentAccess = accountTypeId === PROFILE_TYPE[1].id

  const { onClose: closePaymentsModal } = useDisclose()

  useEffect(() => {
    if (costOfSubscription) {
      const subscriptions = costOfSubscription.data.map((cost, index) => {
        const duration = [`${oneDay}`, `${sevenDays}`, `${month}`]

        return {
          id: index,
          value: `$${cost.amount} ${per} ${duration[index]}`,
          amount: cost.amount,
          typeSubscription: cost.typeDescription as SubscriptionDuration,
        }
      })

      setSubscriptionId(subscriptions[0].id)
      setSubscriptionOptions(subscriptions)
    }
  }, [costOfSubscription])

  useEffect(() => {
    if (query.success || query.token) {
      setSubscription('success')
    }
  }, [query.success, query.token, query])

  const paymentsHandler = (paymentType: 'STRIPE' | 'PAYPAL') => {
    subscriptionOptions &&
      createSubscriptions({
        typeSubscription: subscriptionOptions[subscriptionId].typeSubscription,
        paymentType: paymentType,
        amount: subscriptionOptions[subscriptionId].amount,
        baseUrl: `${FRONT_BASE_URL}/${menuNavigation.account()}` ?? '',
      })
        .unwrap()
        .then(res => window.location.assign(res.url))
  }

  return (
    <section className={s.container}>
      {currentSubscriptions && <CurrentSubscriptions currentSubscriptions={currentSubscriptions} />}

      <div>
        <Typography as={'h3'} variant={'h3'}>
          {accountType}:
        </Typography>

        <Card className={s.card}>
          <RadioContainer
            defaultValue={PROFILE_TYPE[0].id}
            onValueChange={value => setAccountTypeId(value)}
          >
            {PROFILE_TYPE.map(item => (
              <RadioItem key={item.value} {...item} />
            ))}
          </RadioContainer>
        </Card>
      </div>

      {hasPaymentAccess && (
        <div className={s.wrapper}>
          <Typography as={'h3'} variant={'h3'}>
            {yourSubscriptionCosts}:
          </Typography>

          <Card className={s.card}>
            <RadioContainer
              defaultValue={subscriptionOptions && subscriptionOptions[0].id}
              onValueChange={value => setSubscriptionId(value)}
            >
              {subscriptionOptions?.map(option => <RadioItem key={option.amount} {...option} />)}
            </RadioContainer>
          </Card>

          <div className={s.payment}>
            <PaypalIcon onClick={() => paymentsHandler('PAYPAL')} />
            <Typography>{or}</Typography>
            <StripeIcon onClick={() => paymentsHandler('STRIPE')} />
          </div>
        </div>
      )}
      <PaymentsModal
        isOpen={subscription === 'success'}
        onClose={closePaymentsModal}
        isSuccess={query.success === 'true' || query.PayerID}
      />
    </section>
  )
}
