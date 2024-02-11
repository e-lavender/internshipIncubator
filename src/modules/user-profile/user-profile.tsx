import s from './user-profile.module.scss'

import { useCheckAuthentication } from '@/app/hooks/useCheckAuthentication'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { UserProfileModel } from '@/app/services/profile/profile.api.types'
import { useGetPublicPostsByUserQuery } from '@/app/services/public-posts/public-posts.api'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel
}

export const UserProfile = ({ data }: UserProfileType) => {
  useCheckAuthentication()

  const { data: me } = useGetMeQuery()

  const { data: posts } = useGetPublicPostsByUserQuery(
    { userId: me?.userId || 0 },
    { skip: !me?.userId }
  )

  return (
    <main className={s.container}>
      <UserProfileDescription data={data} />
      <UserProfileGallery data={posts} />
    </main>
  )
}
