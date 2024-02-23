import s from './card-description.module.scss'

import { PostModel } from '@/app/services/posts/posts.types'
import { Avatar, PostTypes } from '@/components'
import { Typography } from '@/ui'

export const CardDescription = ({ userName, description, avatarOwner }: PostModel) => {
  return (
    <div className={s.description}>
      <Avatar src={avatarOwner} width={36} height={36} iconScale={0.6} />

      <div className={s.info}>
        <Typography as={'p'} variant={'regular-14'}>
          <Typography variant={'bold-14'}>{`${userName} `}</Typography>
          {description}
        </Typography>
      </div>
    </div>
  )
}
