import React, { memo } from 'react'

import s from './number-of-users.module.scss'

import { useGetPublicPostsQuery } from '@/app/services/post/post.api'
import { GetPublicPostsResponse } from '@/app/services/post/post.types'
import { Typography } from '@/ui'

type Props = {
  data: GetPublicPostsResponse
}

export const NumberOfUsers = memo(({ data }: Props) => {
  const users = String(data.usersCount).padStart(6, '0').split('')

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
