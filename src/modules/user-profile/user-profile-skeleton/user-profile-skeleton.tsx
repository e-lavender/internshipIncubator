import { UserProfileDescriptionSkeleton } from '../user-profile-description'

import { UserGallerySkeleton } from '@/components'

export const UserProfileSkeleton = () => {
  return (
    <section>
      <UserProfileDescriptionSkeleton />
      <UserGallerySkeleton />
    </section>
  )
}
