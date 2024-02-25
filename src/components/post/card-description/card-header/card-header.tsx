import s from './card-header.module.scss'

import { PostModel } from '@/app/services/posts/posts.types'
import { AccountType, Avatar, CardDropdownMenu } from '@/components'
import { Typography } from '@/ui'

export const CardHeader = ({ avatarOwner, userName, createdAt, isMyProfile }: PostModel) => {
  const accountType: AccountType = isMyProfile ? 'personal' : 'public'

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
              {createdAt}
            </Typography>
          </>
        )}
      </div>

      <CardDropdownMenu account={accountType} />
    </header>
  )
}
