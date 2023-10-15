import React, { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import Link from 'next/link'

import s from './sign-in-form.module.scss'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useTranslation } from '@/app/hooks'
import { useSignInMutation } from '@/app/services/auth/auth.api'
import { ControlledTextField } from '@/components/text-field-controlled/controlled-text-field'
import { LoginFormType, useSignInForm } from '@/modules/sign-in-form/use-sign-in-form'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'

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

        <Button as={Link} fullWidth={true} variant={'link'} href={authNavigationUrls.signUp()}>
          {text.signUp}
        </Button>
      </form>
    </Card>
  )
}
