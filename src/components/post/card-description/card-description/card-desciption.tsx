import { useRouter } from 'next/router'

import s from './card-description.module.scss'

import { menuNavigation } from '@/app/constants'
import { PostModel } from '@/app/services/posts/posts.types'
import { Avatar, PostTypes } from '@/components'
import { Typography } from '@/ui'

export const CardDescription = ({ userName, description, avatarOwner, ownerId }: PostModel) => {
  const { push } = useRouter()
  const openUserProfileHandler = (ownerId: number | undefined) => {
    void push(menuNavigation.profile(ownerId))
  }

  return (
    <div className={s.description}>
      <div className={s.user} onClick={() => openUserProfileHandler(ownerId)}>
        <Avatar src={avatarOwner} width={36} height={36} iconScale={0.6} />
        <Typography variant={'bold-14'}>{`${userName} `}</Typography>
      </div>
      <div className={s.info}>
        <Typography as={'p'} variant={'regular-14'}>
          {description}
        </Typography>
      </div>
    </div>
  )
}
