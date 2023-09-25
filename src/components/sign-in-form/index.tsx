import React from 'react'

import s from './sign-in-form.module.scss'

import { GithubIcon, GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'

export const SignIn = () => {
  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>Sign In</Typography>
      <div className={s.oauthIcons}>
        <button className={s.oauthBtn}>
          <GoogleIcon width={36} height={36} />
        </button>
        <button className={s.oauthBtn}>
          <GithubIcon width={36} height={36} />
        </button>
      </div>
      <form className={s.form} action="">
        <TextField placeholder={'User name'} label={'Email'} />
        <TextField placeholder={'Password'} label={'Password'} />
        <Typography className={s.forgotPassword} variant={'regular-14'}>
          Forgot password
        </Typography>
        <Button className={s.signInBtn} fullWidth={true}>
          Sign In
        </Button>
        <Typography className={s.accountText} variant={'regular-16'}>
          Don’t have an account?
        </Typography>
        <Button fullWidth={true} variant={'link'} as={'a'}>
          Sign Up
        </Button>
      </form>
    </Card>
  )
}
