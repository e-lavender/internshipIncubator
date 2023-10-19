import React, { useEffect, useState } from 'react'

import { DevTool } from '@hookform/devtools'
import { LinearProgress } from '@mui/joy'
import Link from 'next/link'
import { toast } from 'react-toastify'

import s from './sign-in-form.module.scss'

import { authNavigationUrls, useTranslation, useSignInMutation, useMatchMedia } from '@/app'
import { ControlledTextField } from '@/components/text-field-controlled/controlled-text-field'
import { useSignInForm } from '@/modules/sign-in-form/use-sign-in-form'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'

export const SignInForm = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false)
  const { isMobile, isTablet, isDesktop } = useMatchMedia()

  const {
    handleSubmit,
    formState: { isValid },
    setFocus,
    control,
  } = useSignInForm()
  const [signIn] = useSignInMutation()
  const { t } = useTranslation()

  const { signInForm: text } = t.authPages.signInPage
  const onSubmitForm = handleSubmit(data => {
    setIsSignIn(true)
    signIn(data)
      .unwrap()
      .then(() => {
        toast.success('you are sign in successfully')
      })
      .catch(error => {
        toast.error(error.data.message)
      })
      .finally(() => {
        setIsSignIn(false)
      })
  })

  const Tag = isMobile ? 'div' : Card

  return (
    <div>
      <Tag className={s.container}>
        <div className={s.progressBar}>
          {isSignIn && <LinearProgress thickness={3} color={'neutral'} />}
        </div>
        <form className={s.form} onSubmit={onSubmitForm}>
          <div className={s.wrapper}>
            <Typography className={s.header} variant={'h1'}>
              {text.signIn}
            </Typography>
            <div className={s.oauthIcons}>
              <GoogleButton />
              <GithubButton />
            </div>
            <DevTool control={control} />
            <ControlledTextField
              className={s.textField}
              label={text.email}
              name={'email'}
              control={control}
            />
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
            <Button disabled={!isValid} type={'submit'} className={s.signInBtn} fullWidth={true}>
              {text.signIn}
            </Button>
            <Typography className={s.accountText} variant={'regular-16'}>
              {text.haveAccount}
            </Typography>

            <Button
              className={s.signUpBtn}
              as={Link}
              variant={'link'}
              href={authNavigationUrls.signUp()}
            >
              {text.signUp}
            </Button>
          </div>
        </form>
      </Tag>
    </div>
  )
}
