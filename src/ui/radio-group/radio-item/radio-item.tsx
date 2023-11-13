import { useId } from 'react'

import * as RadioSelect from '@radix-ui/react-radio-group'

import s from './radio-item.module.scss'

import { Label } from '@/ui'

type RadioItemProps = {
  value: string
  disabled?: boolean
  label?: string
}

export const RadioItem = ({ value, label }: RadioItemProps) => {
  const id = useId()

  return (
    <div className={s.wrapper}>
      <RadioSelect.Item className={s.item} value={value} id={id}>
        <RadioSelect.Indicator className={s.indicator} />
      </RadioSelect.Item>
      {label && <Label title={label} id={id} />}
    </div>
  )
}
