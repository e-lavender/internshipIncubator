import { useTranslation } from '@/app'
import { subscriptionDate } from '@/app/helpers/customizeDate'
import {
  useCanceledAutoRenewalMutation,
  useMyPaymentsQuery,
} from '@/app/services/payments/payments.api'
import { CurrentSubscription } from '@/app/services/payments/payments.types'
import s from '@/modules/account/account-settings/current-subscription/current-subscriptions.module.scss'
import { Card, Checkbox, Typography } from '@/ui'

type Props = {
  currentSubscriptions?: CurrentSubscription
}
export const CurrentSubscriptions = ({ currentSubscriptions }: Props) => {
  const [canceledAutoRenewal] = useCanceledAutoRenewalMutation()
  const { data: myPayments } = useMyPaymentsQuery()

  console.log(myPayments)
  const { t } = useTranslation()
  const { current, expireAt, nextPayment, autoRenewal } = t.account
  const canceledAutoRenewalHandler = () => {
    canceledAutoRenewal()
  }

  return (
    <div className={s.container}>
      <Typography as={'h3'} variant={'h3'}>
        {current}:
      </Typography>

      <Card className={s.currentSubscriptionCard}>
        <div>
          <Typography as={'h3'} variant={'regular-14'} className={s.text}>
            {expireAt}
          </Typography>
          <Typography as={'h3'} variant={'regular-14'}>
            {/*{subscriptionDate(myPayments[myPayments.length - 1].endDateOfSubscription)}*/}
          </Typography>
        </div>
        <div>
          <Typography as={'h3'} variant={'regular-14'} className={s.text}>
            {nextPayment}
          </Typography>
          <Typography as={'h3'} variant={'regular-14'}>
            {subscriptionDate(currentSubscriptions?.data[0]?.endDateOfSubscription)}
          </Typography>
        </div>
      </Card>
      <Checkbox
        className={s.checkBox}
        labelTitle={autoRenewal}
        checked={!currentSubscriptions?.hasAutoRenewal}
        onChange={canceledAutoRenewalHandler}
      />
    </div>
  )
}
