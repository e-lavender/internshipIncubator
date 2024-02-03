import React, { memo } from 'react'

import s from './number-of-users.module.scss'

import { useGetPublicPostsQuery } from '@/app/services/post/post.api'
import { Typography } from '@/ui'

type Props = {
  quantity?: number
}

const numbers = [0, 1, 2, 3, 4, 5]

export const NumberOfUsers = memo(({ quantity }: Props) => {
  const { data } = useGetPublicPostsQuery()

  if (!data) {
    return null
  }
  const numberOfUsers = (num: number) => {
    const data = '000000'
    const numString = num.toString()

    const zerosToSubtract = Math.min(data.length, numString.length)

    const newData = data.slice(0, -zerosToSubtract)

    return (newData + numString).toString().split('')
  }

  return (
    <div className={s.main}>
      <Typography variant="h2">Registered users:</Typography>
      <div className={s.counter}>
        {numberOfUsers(data.usersCount).map((el, idx) => (
          <div key={idx} className={s.digit}>
            <Typography variant="h2">{el}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
})
