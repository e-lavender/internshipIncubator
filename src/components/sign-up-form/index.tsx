import React from 'react'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './sign-up-form.module.scss'

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
  const router = useRouter()
  const googleButtonHandler = () => {
    router.push(`https://flying-merch.vercel.app/api/auth/google`)
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
      <Button type={'submit'} variant={'primary'} fullWidth={true}>
        Sign Up
      </Button>
      <Typography variant={'regular-16'}>Do you have an account?</Typography>
      <Button variant={'link'} as={'a'}>
        Sign In
      </Button>
    </Card>
  )
}
