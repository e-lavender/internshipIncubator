import s from './user-profile.module.scss'

import { useCheckAuthentication } from '@/app/hooks/useCheckAuthentication'
import { UserProfileModel } from '@/app/services/profile/profile.api.types'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel
}

export const UserProfile = ({ data }: UserProfileType) => {
  useCheckAuthentication()

  return (
    <main className={s.container}>
      <UserProfileDescription data={data} />
      <UserProfileGallery />
    </main>
  )
}
