import { ComponentPropsWithoutRef, CSSProperties, FC, ReactElement } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { ArrowDownIcon } from '@/app/assets/svg/arrow-down-icon-svg/arrow-down-icon'

export type Option = { label: string | ReactElement; value: string }

type CommonProps = {
  value: string | number
  onChange: (value: string) => void
  placeholder?: string | ReactElement
  variant?: 'primary' | 'pagination' | 'language' | 'language-mobile'
  options: Array<Option | string>
  label?: string
  width?: CSSProperties['width']
  rootClassName?: string
  open?: boolean
}
export type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, keyof CommonProps> & CommonProps
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
  open,
}) => {
  const IconSize = {
    Small: 16,
    Large: 24,
  } as const
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
        <SelectRadix.Root disabled={disabled} onValueChange={onChange} open={open}>
          <SelectRadix.Trigger className={classNames.trigger} style={rootStyles}>
            <SelectRadix.Value placeholder={placeholder || withoutPlaceholder}>
              {value}
            </SelectRadix.Value>
            <SelectRadix.Icon className={classNames.icon}>
              <ArrowDownIcon size={variant === 'pagination' ? IconSize.Small : IconSize.Large} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>

          <SelectRadix.Portal>
            <SelectRadix.Content className={classNames.content} position={'popper'}>
              {options?.map((option, index) => {
                return (
                  <SelectRadix.Item
                    asChild={true}
                    value={typeof option !== 'string' ? option.value : option}
                    className={classNames.item}
                    key={index}
                  >
                    <span>{typeof option !== 'string' ? option.label : option}</span>
                  </SelectRadix.Item>
                )
              })}
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </SelectRadix.Group>
    </div>
  )
}
