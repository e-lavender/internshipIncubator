import { useEffect, useState } from 'react'

import { UserProfile, UserProfileSkeleton } from '@/modules/user-profile'

const UserProfilePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000)
  }, [])

  return (
    <div style={{ paddingBottom: '7.5rem' }}>
      {isLoaded ? <UserProfile /> : <UserProfileSkeleton />}
    </div>
  )
}

export default UserProfilePage
