import React, { useState } from 'react'

import { clsx } from 'clsx'
import Link from 'next/link'

import s from './sign-up-form.module.scss'

import { useOpenGoogleQuery } from '@/app/services/auth/auth.api'
import { Checkbox } from '@/ui'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { GithubButton } from '@/ui/github-button'
import { GoogleButton } from '@/ui/google-button'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'
const classNames = {
  card: clsx(s.card),
  oauth: clsx(s.oauth),
  button: clsx(s.button),
}

export const SignUpForm = () => {
  const [openGoogle, setOpenGoogle] = useState<boolean>(true)
  const { data } = useOpenGoogleQuery(undefined, { skip: openGoogle })
  const googleButtonHandler = () => {
    setOpenGoogle(false)
  }

  return (
    <Card className={classNames.card}>
      <Typography variant={'h1'}>Sign Up</Typography>
      <div className={classNames.oauth}>
        <GoogleButton onClick={googleButtonHandler} />
        <GithubButton />
      </div>
      <TextField label={'User name'} inputType={'text'} />
      <TextField label={'Email'} inputType={'text'} />
      <TextField label={'Password'} inputType={'password'} />
      <TextField label={'Confirm password'} inputType={'password'} />
      <Checkbox
        left={true}
        labelTitle={
          <Typography variant={'small'}>
            {'I agree to the Terms of Service and Privacy Policy'}
          </Typography>
        }
      />
      <Link href={'#'}>
        <Button type={'submit'} variant={'primary'} fullWidth>
          Sign Up
        </Button>
      </Link>
      <Typography variant={'regular-16'}>Do you have an account?</Typography>
      <Button variant={'link'}>Sign In</Button>
    </Card>
  )
}
