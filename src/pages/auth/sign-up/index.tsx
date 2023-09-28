import React from 'react'

import { SignUpForm } from '@/components'
import FlexWrapper from '@/components/wrappers/flex-wrapper/flex-wrapper'
import { Typography } from '@/ui'

const SignUp = () => {
  return (
    <React.Fragment>
      <Typography variant="h2">SignUp</Typography>
      <FlexWrapper>
        <SignUpForm />
      </FlexWrapper>
    </React.Fragment>
  )
}

export default SignUp
