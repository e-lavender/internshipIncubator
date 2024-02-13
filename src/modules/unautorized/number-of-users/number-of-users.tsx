import React, { memo } from 'react'

import s from './number-of-users.module.scss'

import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { Typography } from '@/ui'

type Props = {
  data: PublicPostsGetAll
}

export const NumberOfUsers = memo(({ data }: Props) => {
  const users = String(data.totalUsers).padStart(6, '0').split('')

  return (
    <div className={s.main}>
      <Typography variant="h2">Registered users:</Typography>
      <div className={s.counter}>
        {users.map((el, idx) => (
          <div key={idx} className={s.digit}>
            <Typography variant="h2">{el}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
})
