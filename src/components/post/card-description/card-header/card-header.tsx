import { useRouter } from 'next/router'

import s from './card-header.module.scss'

import { menuNavigation } from '@/app/constants'
import { date, timeAgo } from '@/app/helpers/customizeDate'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { PostModel } from '@/app/services/posts/posts.types'
import { AccountType, Avatar, CardDropdownMenu } from '@/components'
import { Typography } from '@/ui'

export const CardHeader = ({
  avatarOwner,
  userName,
  createdAt,
  ownerId,
  id,
  isMyProfile,
}: Omit<PostModel, 'images'>) => {
  const accountType: AccountType = isMyProfile ? 'personal' : 'public'
  const { selectedPost, closePostCardModal, clearPostCardModal } = usePostCardModal()
  const { push } = useRouter()
  const openUserProfileHandler = () => {
    push(menuNavigation.profile(ownerId || selectedPost.ownerId)).then(() => {
      closePostCardModal()
      clearPostCardModal()
    })
  }

  return (
    <header className={s.header}>
      <div className={s.user}>
        <div className={s.userInfo} onClick={openUserProfileHandler}>
          <Avatar src={avatarOwner} width={36} height={36} iconScale={0.6} />
          <Typography
            as={'a'}
            variant={'h3'}
            href={menuNavigation.profile(ownerId || selectedPost.ownerId)}
          >
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

      <CardDropdownMenu ownerId={ownerId} id={id} account={accountType} />
    </header>
  )
}
