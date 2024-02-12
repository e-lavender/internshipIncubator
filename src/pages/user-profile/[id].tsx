import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { UserProfile, UserProfileSkeleton } from '@/modules/user-profile'

const UserProfilePage = () => {
  const { data: userProfile, isLoading } = useGetProfileQuery()

  if (isLoading) {
    return <UserProfileSkeleton />
  }

  return <UserProfile data={userProfile} />
}

export default UserProfilePage
