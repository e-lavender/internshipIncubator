import React from 'react'

import { clsx } from 'clsx'

import s from './sign-up-form.module.scss'

import { Checkbox } from '@/ui'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import GithubButton from '@/ui/github-button'
import GoogleButton from '@/ui/google-button'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'
const classNames = {
  card: clsx(s.card),
  oauth: clsx(s.oauth),
}

export const SignUpForm = () => {
  return (
    <Card className={classNames.card}>
      <Typography variant={'h1'}>Sign Up</Typography>
      <div className={classNames.oauth}>
        <GoogleButton />
        <GithubButton />
      </div>
      <TextField title={'User name'} inputType={'text'} />
      <TextField title={'Email'} inputType={'text'} />
      <TextField title={'Password'} inputType={'password'} />
      <TextField title={'Confirm password'} inputType={'password'} />
      <Checkbox left={true} labelTitle={'I agree to the Terms of Service and Privacy Policy'} />
      <Button variant={'primary'}>Sign Up</Button>
      <Typography variant={'regular-16'}>Do you have an account?</Typography>
      <Button variant={'link'}>Sign In</Button>
    </Card>
  )
}
