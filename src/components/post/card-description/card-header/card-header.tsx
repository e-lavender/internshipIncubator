import { useRouter } from 'next/router'

import s from './card-header.module.scss'

import { menuNavigation } from '@/app/constants'
import { date, timeAgo } from '@/app/helpers/customizeDate'
import { PostModel } from '@/app/services/posts/posts.types'
import { AccountType, Avatar, CardDropdownMenu } from '@/components'
import { Typography } from '@/ui'

export const CardHeader = ({ avatarOwner, userName, createdAt, isMyProfile }: PostModel) => {
  const accountType: AccountType = isMyProfile ? 'personal' : 'public'

export const CardHeader = ({
  avatarOwner,
  userName,
  //account = 'personal',
  createdAt,
  ownerId,
  id,
}: PostModel) => {
  const { push } = useRouter()
  const openUserProfileHandler = (ownerId: number | undefined) => {
    void push(menuNavigation.profile(ownerId))
  }

  return (
    <header className={s.header}>
      <div className={s.user}>
        <div className={s.userInfo} onClick={() => openUserProfileHandler(ownerId)}>
          <Avatar src={avatarOwner} width={36} height={36} iconScale={0.6} />
          <Typography as={'h3'} variant={'h3'}>
            {userName}
          </Typography>
        </div>
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
      <CardDropdownMenu account={accountType} />
    </header>
  )
}
