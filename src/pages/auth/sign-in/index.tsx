import React from 'react'

import { FlexWrapper } from '@/components'
import { SignInForm } from '@/components/sign-in-form'

const SignInPage = () => {
  return (
    <React.Fragment>
      <FlexWrapper>
        <SignInForm />
      </FlexWrapper>
    </React.Fragment>
  )
}

export default SignInPage
