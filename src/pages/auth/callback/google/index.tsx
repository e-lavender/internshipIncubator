import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useGoogleAuthMutation, useGetGoogleMutation } from '@/app'

const GooglePage = () => {
  const [isFirst, setIsFirst] = useState(true)
  const router = useRouter()
  const { accessToken } = router.query
  const [getGoogleAuthData, { data }] = useGetGoogleMutation()
  const [signUpWithGoogle] = useGoogleAuthMutation()

  useEffect(() => {
    if (accessToken && isFirst) {
      getGoogleAuthData({ access_token: accessToken as string })
      setIsFirst(false)
    }
    if (data) {
      signUpWithGoogle(data)
    }
  }, [accessToken, data, getGoogleAuthData, isFirst, signUpWithGoogle])

  return <div>Google</div>
}

export default GooglePage
