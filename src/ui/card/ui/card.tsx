import { FC } from 'react'

import { clsx } from 'clsx'

import s from '../lib/card.module.scss'

import { CardType } from '@/ui/card/model/card-types'

export const Card: FC<CardType> = ({ children, className, ...rest }) => {
  const style = clsx(s.card, className)

  return (
    <div className={style} {...rest}>
      {children}
    </div>
  )
}
