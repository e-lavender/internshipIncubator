import { Avatar } from '@/components'
import { UserGallerySkeleton } from '@/components/user-profile/user-gallery/user-gallery-skeleton/user-gallery-skeleton'
import { UserStatisticsSkeleton } from '@/components/user-profile/user-statistics'
import s from '@/modules/user-profile/user-profile.module.scss'
import { Button, Typography } from '@/ui'
import { SkeletonCard } from '@/ui/skeleton/skeleton-card/skeleton-card'

export const UserProfileSkeleton = () => {
  return (
    <section>
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
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Typography>
          </SkeletonCard>
        </div>
      </div>

      <UserGallerySkeleton />
    </section>
  )
}
