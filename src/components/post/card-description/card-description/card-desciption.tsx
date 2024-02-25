import React, { useState } from 'react'

import { useRouter } from 'next/router'

import s from './card-description.module.scss'

import { menuNavigation } from '@/app/constants'
import { PostModel } from '@/app/services/posts/posts.types'
import { Avatar, PostTypes } from '@/components'
import { Typography } from '@/ui'

export const CardDescription = ({ userName, description, avatarOwner, ownerId }: PostModel) => {
  const [showMore, setShowMore] = useState(false)

  const { push } = useRouter()
  const collapseHandler = () => {
    setShowMore(!showMore)
  }
  const openUserProfileHandler = (ownerId: number | undefined) => {
    void push(menuNavigation.profile(ownerId))
  }

  if (!description) {
    return null
  }

  return (
    <div className={s.description}>
      <div className={s.user} onClick={() => openUserProfileHandler(ownerId)}>
        <Avatar src={avatarOwner} width={36} height={36} iconScale={0.6} />
        <Typography variant={'bold-14'}>{`${userName} `}</Typography>
      </div>
      <div className={s.info}>
        <Typography variant={'regular-14'}>
          {showMore ? description : `${description.substring(0, 90)}`}
        </Typography>
        {description.length > 90 && (
          <Typography
            as={'button'}
            variant={'regular-14'}
            className={s.button}
            onClick={collapseHandler}
          >
            {showMore ? 'Hide' : 'Show more'}
          </Typography>
        )}
      </div>
    </div>
  )
}
