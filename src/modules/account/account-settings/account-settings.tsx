import { useEffect, useState } from 'react'

import s from './account-settings.module.scss'
import { PAYMENT_OPTIONS, PROFILE_TYPE } from './data'

import { Nullable, PaypalIcon, StripeIcon } from '@/app'
import { menuNavigation } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import {
  useCostOfSubscriptionsQuery,
  useCreateSubscriptionsMutation,
} from '@/app/services/payments/payments.api'
import { SubscriptionDuration, SubscriptionOptions } from '@/app/services/payments/payments.types'
import { Card, RadioContainer, RadioItem, Typography } from '@/ui'

export const AccountSettings = () => {
  // Added state for demonstration purposes of flow
  const [accountType, setAccountType] = useState('')
  const [subscriptionId, setSubscriptionId] = useState<number>(0)
  const [subscriptionOptions, setSubscriptionOptions] =
    useState<Nullable<SubscriptionOptions[]>>(null)
  const [createSubscriptions] = useCreateSubscriptionsMutation()
  const { data: costOfSubscription } = useCostOfSubscriptionsQuery()

  const hasPaymentAccess = accountType === 'business'

  useEffect(() => {
    if (costOfSubscription) {
      const subscriptions = costOfSubscription.data.map((cost, index) => {
        const duration = [`1 Day`, `7 Days`, `month`]

        return {
          id: index,
          value: `$${cost.amount} per ${duration[index]}`,
          amount: cost.amount,
          typeSubscription: cost.typeDescription as SubscriptionDuration,
        }
      })

      setSubscriptionId(subscriptions[0].id)
      setSubscriptionOptions(subscriptions)
    }
  }, [costOfSubscription])

  const paymentsHandler = (paymentType: 'STRIPE' | 'PAYPAL') => {
    console.log('paymentsHandler')
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
      <div>
        <Typography as={'h3'} variant={'h3'}>
          Account type:
        </Typography>

        <Card className={s.card}>
          <RadioContainer defaultValue={'personal'} onValueChange={value => setAccountType(value)}>
            {PROFILE_TYPE.map(item => (
              <RadioItem key={item.value} {...item} />
            ))}
          </RadioContainer>
        </Card>
      </div>

      {hasPaymentAccess && (
        <div className={s.wrapper}>
          <Typography as={'h3'} variant={'h3'}>
            Your subscription costs:
          </Typography>

          <Card className={s.card}>
            <RadioContainer defaultValue={'10'}>
              {PAYMENT_OPTIONS.map(option => (
                <RadioItem key={option.value} {...option} />
              ))}
            </RadioContainer>
          </Card>

          <div className={s.payment}>
            <div onClick={() => paymentsHandler('PAYPAL')}>
              <PaypalIcon />
            </div>
            <Typography>Or</Typography>
            <div onClick={() => paymentsHandler('STRIPE')}>
              <StripeIcon />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
