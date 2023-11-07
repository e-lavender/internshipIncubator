import { useMatchMedia } from '@/app'
import { UserGallerySkeleton } from '@/components'
import { MobileUserProfileDescriptionSkeleton, UserProfileDescriptionSkeleton } from '@/modules'

export const UserProfileSkeleton = () => {
  const { isMobile } = useMatchMedia()

  return (
    <section>
      {isMobile ? <MobileUserProfileDescriptionSkeleton /> : <UserProfileDescriptionSkeleton />}
      <UserGallerySkeleton />
    </section>
  )
}
