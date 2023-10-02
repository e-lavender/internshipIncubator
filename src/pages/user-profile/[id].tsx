import React from 'react'

import { useRouter } from 'next/router'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { Typography } from '@/ui'

const UserProfile = () => {
  const { data: me } = useGetMeQuery(undefined, { refetchOnMountOrArgChange: true })
  const { push } = useRouter()

  if (!me) {
    push(authNavigationUrls.signIn())
  }

  return <Typography variant="h1">UserProfile</Typography>
}

export default UserProfile
