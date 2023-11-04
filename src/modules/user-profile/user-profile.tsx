import { useMatchMedia } from '@/app'
import { UserProfileGallery } from '@/components/user-profile/user-gallery'
import { UserProfileDescription } from '@/modules/user-profile/user-profile-description'
import { MobileUserProfileDescription } from '@/modules/user-profile/user-profile-description/mobile'

export const UserProfile = () => {
  const { isMobile } = useMatchMedia()

  return (
    <section>
      {isMobile ? <MobileUserProfileDescription /> : <UserProfileDescription />}
      <UserProfileGallery />
    </section>
  )
}
