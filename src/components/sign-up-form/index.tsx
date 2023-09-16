import React from 'react'

import { clsx } from 'clsx'

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
  return (
    <Card className={classNames.card}>
      <Typography variant={'h1'}>Sign Up</Typography>
      <div className={classNames.oauth}>
        <GoogleButton />
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
      <Button className={classNames.button} type={'submit'} variant={'primary'} fullWidth>
        <Typography variant={'h3'}>Sign Up</Typography>
      </Button>
      <Typography variant={'regular-16'}>Do you have an account?</Typography>
      <Button variant={'link'}>
        <Typography variant={'h3'}>Sign In</Typography>
      </Button>
    </Card>
  )
}
