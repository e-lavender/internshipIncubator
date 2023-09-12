import { CSSProperties, FC } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { ArrowDownIcon } from '@/app/assets/arrow-down-icon'

export type Option = { label: string; value: string }

type ConditionalMultipleProps = {
  multiple?: true
  value: string
  onChange: (value: string) => void
}

type CommonProps = {
  className?: string
  disabled?: boolean
  name?: string
  placeholder?: string
  required?: boolean
  variant?: 'primary' | 'pagination'
  options: Array<Option>
  portal?: boolean
  label?: string
  width?: CSSProperties['width']
  rootClassName?: string
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select: FC<SelectProps> = ({
  variant = 'primary',
  placeholder,
  value,
  disabled,
  className,
  onChange,
  options,
  label,
  rootClassName,
  width,
}) => {
  const classNames = {
    root: rootClassName,
    trigger: clsx(s.trigger, s[variant], className),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    content: clsx(s.content, s[variant]),
    label: clsx(s.label, disabled && s.disabled),
  }
  const withoutPlaceholder = variant === 'pagination' ? value : 'Select Box'
  const rootStyles = { width }

  return (
    <div className={classNames.root}>
      <SelectRadix.Group>
        <SelectRadix.Label className={classNames.label}>{label}</SelectRadix.Label>
        <SelectRadix.Root disabled={disabled} onValueChange={onChange}>
          <SelectRadix.Trigger className={classNames.trigger} style={rootStyles}>
            <SelectRadix.Value placeholder={placeholder || withoutPlaceholder}>
              {value}
            </SelectRadix.Value>
            <SelectRadix.Icon className={classNames.icon}>
              <ArrowDownIcon size={variant === 'pagination' ? 16 : 24} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>

          <SelectRadix.Portal>
            <SelectRadix.Content className={classNames.content} position={'popper'}>
              {options.map(option => (
                <SelectRadix.Item
                  value={option.value}
                  className={classNames.item}
                  key={option.value}
                >
                  {option.label}
                </SelectRadix.Item>
              ))}
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </SelectRadix.Group>
    </div>
  )
}
