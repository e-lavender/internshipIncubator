import { useMatchMedia } from '@/app'
import { Avatar } from '@/components'
import { UserStatisticsSkeleton } from '@/components/user-profile/user-statistics'
import { MobileUserProfileDescriptionSkeleton } from '@/modules'
import { Button, SkeletonCard, Typography } from '@flyingtornado06/ui-kit'

import s from '../user-profile-description.module.scss'

export const UserProfileDescriptionSkeleton = () => {
  const { isMobile } = useMatchMedia()

  if (isMobile) {
    return <MobileUserProfileDescriptionSkeleton />
  }

  return (
    <div className={s.container}>
      <SkeletonCard circle>
        <Avatar />
      </SkeletonCard>

      <div className={s.profile}>
        <div className={s.header}>
          <SkeletonCard>
            <Typography as={'h1'} variant={'h1'}>
              URLProfile
            </Typography>
          </SkeletonCard>

          <SkeletonCard>
            <Button variant={'secondary'}>Profile Settings</Button>
          </SkeletonCard>
        </div>

        <UserStatisticsSkeleton />

        <SkeletonCard>
          <Typography as={'p'} variant={'regular-16'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur
            adipiscing elit.
          </Typography>
        </SkeletonCard>
      </div>
    </div>
  )
}
