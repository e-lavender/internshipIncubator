import { FC, useId } from 'react'

import * as CheckboxRDX from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import { Typography } from '../typography/typography'

import s from './checkbox.module.scss'

import { CheckIcon } from '@/app/assets/svg'
import { Label } from '@/ui/label'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  labelTitle?: string
  id?: string
  left?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  left,
  disabled,
  required,
  id,
  labelTitle,
  className,
}) => {
  const fallbackId = useId()

  const styles = {
    root: clsx(s.root, left && s.left, className),
    container: clsx(s.container, disabled && s.disabled),
    checkbox: s.checkbox,
    label: clsx(s.label, disabled && s.disabled),
    indicator: clsx(s.indicator),
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <CheckboxRDX.Root
          id={id || fallbackId}
          checked={checked}
          onCheckedChange={onChange}
          disabled={disabled}
          required={required}
          className={styles.checkbox}
        >
          <CheckboxRDX.Indicator className={styles.indicator}>
            <CheckIcon />
          </CheckboxRDX.Indicator>
        </CheckboxRDX.Root>
      </div>

      {labelTitle && (
        <Label id={id || fallbackId}>
          <Typography className={styles.label} variant="regular-16">
            {labelTitle}
          </Typography>
        </Label>
      )}
    </div>
  )
}
