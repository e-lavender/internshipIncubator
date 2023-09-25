import React, { FC } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './sign-in-form.module.scss'

import { GithubIcon, GoogleIcon } from '@/app/assets/svg'
import { ControlledTextField } from '@/components/controlled/controlled-input'
import { LoginFormType, useSignInForm } from '@/components/sign-in-form/use-sign-in-form'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { Typography } from '@/ui/typography/typography'

type PropsType = {
  onSubmitHandler?: (data: LoginFormType) => void
}
export const SignIn: FC<PropsType> = ({ onSubmitHandler }) => {
  const { handleSubmit, control } = useSignInForm()

  const onSubmit = handleSubmit(data => onSubmitHandler!(data))

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
      <form className={s.form} onSubmit={onSubmit}>
        <DevTool control={control} />
        <ControlledTextField label={'Email'} name={'email'} control={control} />
        <ControlledTextField
          label={'Password'}
          name={'password'}
          inputType={'password'}
          control={control}
        />
        <Typography className={s.forgotPassword} variant={'regular-14'}>
          Forgot password
        </Typography>
        <Button type={'submit'} className={s.signInBtn} fullWidth={true}>
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
