import React, { useState } from 'react'

import { LinearProgress } from '@mui/joy'
import Link from 'next/link'

import s from './sign-up-form.module.scss'

import {
  authNavigationUrls,
  ErrorWithData,
  showError,
  TagProcessor,
  useDisclose,
  useSignUpMutation,
  useTranslation,
} from '@/app'
import { ControlledCheckbox, ControlledTextField, NotificationModal } from '@/components'
import { useSignupForm } from '@/modules/sign-up-form/use-sign-up-form'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'

export const SignUpForm = () => {
  //TODO remove progressBar state after refactoring oAuthButtons
  const [progressBar, setProgressBar] = useState<boolean>(false)
  const [register, { isLoading }] = useSignUpMutation()
  const { isOpen, onClose, onOpen } = useDisclose()

  const { t } = useTranslation()
  const { signUpForm: text } = t.authPages.signUpPage

  const {
    control,
    formState: { isValid, dirtyFields },
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
  } = useSignupForm()
  const email = watch('email')
  const isButtonDisabled = isLoading || (dirtyFields && !isValid)

  const onCloseNotification = () => {
    onClose()
    reset()
  }

  const onSubmitForm = handleSubmit(data => {
    register({ ...data, login: data.userName })
      .unwrap()
      .then(() => {
        onOpen()
      })
      .catch((error: ErrorWithData) => {
        showError(error)
      })
  })

  const onBlurConfirmPassword = () => {
    if (watch('password') != watch('confirmPassword')) {
      return setError('confirmPassword', {
        type: 'custom',
        message: `${text.formErrors.confirmPassword.matchPasswords}`,
      })
    }

    clearErrors('confirmPassword')
  }

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
        <div className={s.progressBar}>
          {(isLoading || progressBar) && <LinearProgress thickness={3} color={'neutral'} />}
        </div>
        <form onSubmit={onSubmitForm}>
          <div className={s.wrapper}>
            <Typography variant={'h1'}>{text.signUp}</Typography>
            <div className={s.oauthIcons}>
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
              onBlur={onBlurConfirmPassword}
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
              type={'submit'}
              disabled={isButtonDisabled}
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