import s from './card-header.module.scss'

import { date, timeAgo } from '@/app/helpers/customizeDate'
import { PostModel } from '@/app/services/posts/posts.types'
import { Avatar, CardDropdownMenu } from '@/components'
import { Typography } from '@/ui'

export const CardHeader = ({
  avatarOwner,
  userName,
  //account = 'personal',
  createdAt,
  ownerId,
  id,
}: PostModel) => {
  return (
    <header className={s.header}>
      <div className={s.user}>
        <Avatar src={avatarOwner} width={36} height={36} iconScale={0.6} />
        <Typography as={'h3'} variant={'h3'}>
          {userName}
        </Typography>

        {createdAt && (
          <>
            <div className={s.circle}></div>
            <Typography variant={'small'} className={s.date}>
              {timeAgo(createdAt)}
            </Typography>
          </>
        )}
      </div>

      <CardDropdownMenu ownerId={ownerId} id={id} account={'friend'} />
    </header>
  )
}
