import s from './user-profile.module.scss'

import { useCheckAuthentication } from '@/app/hooks/useCheckAuthentication'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { UserProfileModel } from '@/app/services/profile/profile.api.types'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription, UserProfileSkeleton } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel
}

export const UserProfile = () => {
  useCheckAuthentication()
  const { data, isLoading } = useGetProfileQuery()

  if (isLoading) {
    return <UserProfileSkeleton />
  }

  return (
    <main className={s.container}>
      <UserProfileDescription data={data} />
      <UserProfileGallery />
    </main>
  )
}
