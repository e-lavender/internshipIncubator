import { useId } from 'react'

import * as RadioSelect from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-item.module.scss'

import { Nullable } from '@/app'
import { SubscriptionOptions } from '@/app/services/payments/payments.types'
import { Label } from '@/ui'

type RadioItemProps = {
  value: string
  disabled?: boolean
  label?: string
  id?: any
}

export const RadioItem = ({ value, disabled, id }: RadioItemProps) => {
  //const id = useId()

  const styles = {
    root: clsx(s.wrapper, disabled && s.disabled),
    item: clsx(s.item),
    indicator: clsx(s.indicator),
  }

  return (
    <div className={styles.root}>
      <RadioSelect.Item className={styles.item} value={id} id={id} disabled={disabled}>
        <RadioSelect.Indicator className={styles.indicator} />
      </RadioSelect.Item>
      {value && <Label title={value} id={id} />}
    </div>
  )
}
