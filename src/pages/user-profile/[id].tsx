import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useGetMeQuery, useSignOutMutation } from '@/app/services/auth/auth.api'
import { Button, Typography } from '@/ui'

const UserProfile = () => {
  const { data: me } = useGetMeQuery(undefined, { refetchOnMountOrArgChange: true })
  const router = useRouter()
  const [logout] = useSignOutMutation()

  useEffect(() => {
    if (!me) {
      router.push(authNavigationUrls.signIn())
    }
  }, [me, router])

  return (
    <>
      <Typography variant="h1">UserProfile</Typography>
      <Button variant={'primary'} onClick={() => logout()}>
        Log out
      </Button>
    </>
  )
}

export default UserProfile
