import s from './user-profile.module.scss'

import { useMatchMedia } from '@/app'
import { UserProfileGallery } from '@/components'
import { MobileUserProfileDescription, UserProfileDescription } from '@/modules'

export const UserProfile = () => {
  const { isMobile } = useMatchMedia()

  return (
    <section className={s.container}>
      {isMobile ? <MobileUserProfileDescription /> : <UserProfileDescription />}
      <UserProfileGallery />
    </section>
  )
}
