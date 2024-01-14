import { clsx } from 'clsx'

import { Avatar, UserStatistics } from '@/components'
import s from '@/modules/user-profile/user-profile-description/mobile-user-profile/mobile-user-profile-description.module.scss'
import { Typography } from '@/ui'
import { SkeletonCard } from '@/ui/skeleton'

export const MobileUserProfileDescriptionSkeleton = () => {
  const styles = clsx(s.container, s.mobile)

  return (
    <div className={styles}>
      <div className={s.header}>
        <div className={s.avatar}>
          <SkeletonCard circle>
            <Avatar src={'/assets/avatar/avatar.jpg'} />
          </SkeletonCard>
        </div>

        <SkeletonCard>
          <UserStatistics />
        </SkeletonCard>
      </div>

      <SkeletonCard>
        <div className={s.title}>
          <Typography as={'h1'} variant={'h1'}>
            URLProfile
          </Typography>
        </div>
      </SkeletonCard>

      <SkeletonCard>
        <Typography as={'p'} variant={'regular-14'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.{' '}
        </Typography>
      </SkeletonCard>
    </div>
  )
}
