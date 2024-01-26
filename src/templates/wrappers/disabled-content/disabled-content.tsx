import React, { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './disabled-content.module.scss'
type Props = PropsWithChildren<{ id?: string; disabled?: boolean }>
export const DisabledContent = ({ id, disabled = false, children }: Props) => {
  return (
    <div id={id} className={clsx(disabled && s.disabled)}>
      {children}
    </div>
  )
}
