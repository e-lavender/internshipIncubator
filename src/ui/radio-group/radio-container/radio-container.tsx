import { PropsWithChildren } from 'react'

import * as RadioSelect from '@radix-ui/react-radio-group'

import s from './radio-container.module.scss'

type RadioContainerProps = {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  disabled?: boolean
  required?: boolean
  loop?: boolean
  dir?: 'ltr' | 'rtl'
}
export const RadioContainer = ({
  defaultValue,
  children,
  ...props
}: PropsWithChildren<RadioContainerProps>) => {
  return (
    <form>
      <RadioSelect.Root
        className={s.root}
        defaultValue={defaultValue}
        aria-label="View density"
        {...props}
      >
        {children}
      </RadioSelect.Root>
    </form>
  )
}
