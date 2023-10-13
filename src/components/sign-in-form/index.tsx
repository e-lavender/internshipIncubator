import React, { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import Link from 'next/link'

import s from './sign-in-form.module.scss'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useTranslation } from '@/app/hooks'
import { useSignInMutation } from '@/app/services/auth/auth.api'
import { LoginFormType, useSignInForm } from '@/components/sign-in-form/use-sign-in-form'
import { ControlledTextField } from '@/components/text-field-controlled/controlled-text-field'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { GithubButton } from '@/ui/github-button'
import { GoogleButton } from '@/ui/google-button'
import { Typography } from '@/ui/typography/typography'

type PropsType = {
  onSubmitHandler?: (data: LoginFormType) => void
}
export const SignInForm: FC<PropsType> = () => {
  const { handleSubmit, control } = useSignInForm()
  const [signIn] = useSignInMutation()
  const { t } = useTranslation()
  const { signInForm: text } = t.authPages.signInPage
  const onSubmitForm = handleSubmit(data => {
    signIn(data)
  })

  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>{text.signIn}</Typography>
      <div className={s.oauthIcons}>
        <GoogleButton />
        <GithubButton />
      </div>
      <form className={s.form} onSubmit={onSubmitForm}>
        <DevTool control={control} />
        <ControlledTextField label={text.email} name={'email'} control={control} />
        <ControlledTextField
          className={s.textField}
          label={text.password}
          name={'password'}
          inputType={'password'}
          control={control}
        />
        <Link href={authNavigationUrls.forgotPassword()}>
          <Typography className={s.forgotPassword} variant={'regular-14'}>
            {text.forgotPassword}
          </Typography>
        </Link>
        <Button type={'submit'} className={s.signInBtn} fullWidth={true}>
          {text.signIn}
        </Button>
        <Typography className={s.accountText} variant={'regular-16'}>
          {text.haveAccount}
        </Typography>
        <Link href={authNavigationUrls.signUp()}>
          <Button fullWidth={true} variant={'link'}>
            {text.signUp}
          </Button>
        </Link>
      </form>
    </Card>
  )
}
