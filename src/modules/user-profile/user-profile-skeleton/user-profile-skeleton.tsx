import { UserProfileDescriptionSkeleton } from '../user-profile-description'

import { useMatchMedia } from '@/app'
import { UserGallerySkeleton } from '@/components'
import { MobileUserProfileDescriptionSkeleton } from '@/modules/user-profile/user-profile-description/user-profile-description-skeleton/mobile'

export const UserProfileSkeleton = () => {
  const { isMobile } = useMatchMedia()

  return (
    <section>
      {isMobile ? <MobileUserProfileDescriptionSkeleton /> : <UserProfileDescriptionSkeleton />}
      <UserGallerySkeleton />
    </section>
  )
}
