import React, { useState } from 'react'

import { LinearProgress } from '@mui/joy'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './sign-up-form.module.scss'

import {
  authNavigationUrls,
  TagProcessor,
  useTranslation,
  useDisclose,
  useSignUpMutation,
  ErrorWithData,
  showError,
} from '@/app'
import { ControlledCheckbox, NotificationModal, ControlledTextField } from '@/components'
import { useSignupForm } from '@/modules/sign-up-form/use-sign-up-form'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'

export const SignUpForm = () => {
  const [progressBar, setProgressBar] = useState<boolean>(false)
  const { isOpen, onClose, onOpen } = useDisclose()
  const [register] = useSignUpMutation()
  const router = useRouter()
  const { t } = useTranslation()
  const { signUpForm: text } = t.authPages.signUpPage
  const {
    control,
    formState: { isValid, dirtyFields },
    handleSubmit,
    reset,
    watch,
  } = useSignupForm()
  const email = watch('email')
  const disableSignUpButton = dirtyFields && !isValid
  const onCloseNotification = () => {
    onClose()
    reset()
    void router.push(authNavigationUrls.signIn())
  }
  const onSubmitForm = handleSubmit(data => {
    setProgressBar(true)
    register({ ...data, login: data.userName })
      .unwrap()
      .then(() => {
        onOpen()
      })
      .catch((error: ErrorWithData) => {
        showError(error)
      })
      .finally(() => {
        setProgressBar(false)
      })
  })

  const policyLinks = (
    <Typography variant={'small'}>
      <TagProcessor
        text={text.policyLinks}
        tags={{
          1: () => (
            <Typography variant={'small-link'}>
              <Link href={authNavigationUrls.termsOfService()}>{text.termsOfService}</Link>
            </Typography>
          ),
          2: () => (
            <Typography variant={'small-link'}>
              <Link href={authNavigationUrls.privacyPolicy()}>{text.privacyPolicy}</Link>
            </Typography>
          ),
        }}
      />
    </Typography>
  )

  return (
    <div>
      <Card className={s.container}>
        <div style={{ height: '3px' }}>
          {progressBar && <LinearProgress thickness={3} color={'neutral'} />}
        </div>
        <form onSubmit={onSubmitForm}>
          <div className={s.wrapper}>
            <Typography variant={'h1'}>{text.signUp}</Typography>
            <div className={s.oauth}>
              <GoogleButton onClick={setProgressBar} />
              <GithubButton onClick={setProgressBar} />
            </div>
            <ControlledTextField
              className={s.textField}
              label={text.userName}
              inputType={'text'}
              name={'userName'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.email}
              inputType={'text'}
              name={'email'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.password}
              inputType={'password'}
              name={'password'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.confirmPassword}
              inputType={'password'}
              name={'confirmPassword'}
              control={control}
            />
            <div className={s.policy}>
              <ControlledCheckbox
                left={true}
                name={'policy'}
                control={control}
                labelTitle={text.policy}
              />
              {policyLinks}
            </div>
            <Button
              disabled={disableSignUpButton}
              type={'submit'}
              variant={'primary'}
              fullWidth={true}
              className={s.button}
            >
              {text.signUp}
            </Button>
            <Typography variant={'regular-16'} className={s.text}>
              {text.haveAccount}
            </Typography>
            <Link href={authNavigationUrls.signIn()}>
              <Button variant={'link'}>{text.signIn}</Button>
            </Link>
          </div>
        </form>
      </Card>
      <NotificationModal
        isOpen={isOpen}
        onClose={onCloseNotification}
        message={`${text.notificationMessage} ${email} `}
      />
    </div>
  )
}
