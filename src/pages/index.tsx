import React from 'react'

import { useRouter } from 'next/router'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { SignInForm } from '@/modules'
import { FlexWrapper } from '@/templates'

const Home = () => {
  const { data: me } = useGetMeQuery()
  const { push } = useRouter()

  if (me) {
    void push('/user-profile/')
  }

  return (
    <FlexWrapper>
      <SignInForm />
    </FlexWrapper>
  )
}

export default Home
