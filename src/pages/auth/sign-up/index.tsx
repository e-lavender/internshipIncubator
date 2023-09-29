import React from 'react'

import { SignUpForm, FlexWrapper } from '@/components'
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
