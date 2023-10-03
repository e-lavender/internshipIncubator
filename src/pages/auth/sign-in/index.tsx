import React from 'react'

import { useRouter } from 'next/router'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { FlexWrapper } from '@/components'
import { SignInForm } from '@/components/sign-in-form'

const SignInPage = () => {
  const { data: me } = useGetMeQuery()

  const { push } = useRouter()

  if (me) {
    push('/user-profile/idFromURL')
  }

  return (
    <React.Fragment>
      <FlexWrapper>
        <SignInForm />
      </FlexWrapper>
    </React.Fragment>
  )
}

export default SignInPage
