import React from 'react'

import { SignUpForm } from '@/components'
import { Typography } from '@/ui/typography/typography'

const SignUp = () => {
  return (
    <React.Fragment>
      <Typography variant="h2">SignUp</Typography>
      <SignUpForm />
    </React.Fragment>
  )
}

export default SignUp
