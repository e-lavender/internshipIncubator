import React from 'react'

import { useRouter } from 'next/router'

import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { SignInForm } from '@/modules'

const SignInPage = () => {
  const { data: me } = useGetMeQuery()

  const { push } = useRouter()

  if (me) {
    void push(authNavigationUrls.home())
  }

  return <SignInForm />
}

export default SignInPage
