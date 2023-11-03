import { UserProfileGallery } from '@/components/user-profile/user-gallery'
import { UserProfileDescription } from '@/modules/user-profile/user-profile-description'

export const UserProfile = () => {
  return (
    <section>
      <UserProfileDescription />
      <UserProfileGallery />
    </section>
  )
}
