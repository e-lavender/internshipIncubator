import React, { memo } from 'react'

import s from './number-of-users.module.scss'

import { Typography } from '@/ui'

type Props = {
  quantity?: number
}

const numbers = [0, 1, 2, 3, 4, 5]

export const NumberOfUsers = memo(({ quantity }: Props) => {
  return (
    <div className={s.main}>
      <Typography variant="h2">Registered users:</Typography>
      <div className={s.counter}>
        {numbers.map((el, idx) => (
          <div key={idx} className={s.digit}>
            <Typography variant="h2">{el}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
})
