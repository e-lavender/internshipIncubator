import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

import { useSignUpMutation } from '@/app/services/auth/auth.api'
import { ControlledCheckbox } from '@/components/checkbox-controlled/controlled-checkbox'
import { useSignupForm } from '@/components/sign-up-form/sign-up-schema'
import { ControlledTextField } from '@/components/text-field-controlled/controlled-text-field'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { GithubButton } from '@/ui/github-button'
import { GoogleButton } from '@/ui/google-button'
import { Typography } from '@/ui/typography/typography'

export const SignUpForm = () => {
  const { signUpFormSchema } = useSignupForm()

  type SignUpFormType = z.infer<typeof signUpFormSchema>
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
  })
  const disableSignUpButton = Object.keys(errors).length > 0 || !isDirty

  const [signUp] = useSignUpMutation()
  const onSubmitForm = handleSubmit(data => {
    signUp({
      login: data.userName,
      password: data.password,
      email: data.email,
    })
      .unwrap()
      .then(data => {
        reset()
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <Card>
      <form onSubmit={onSubmitForm}>
        <div className={s.wrapper}>
          <Typography variant={'h1'}>Sign Up</Typography>
          <div className={s.oauth}>
            <GoogleButton />
            <GithubButton />
          </div>

          <ControlledTextField
            label={'User name'}
            inputType={'text'}
            name={'userName'}
            control={control}
          />
          <ControlledTextField
            label={'Email'}
            inputType={'text'}
            name={'email'}
            control={control}
          />
          <ControlledTextField
            label={'Password'}
            inputType={'password'}
            name={'password'}
            control={control}
          />
          <ControlledTextField
            label={'Confirm password'}
            inputType={'password'}
            name={'confirmPassword'}
            control={control}
          />
          <ControlledCheckbox left={true} name={'policy'} control={control} />
          <Typography variant={'small'}>
            I agree to the
            <Typography variant={'small-link'} as={'span'}>
              Terms of Service
            </Typography>
            and
            <Typography variant={'small-link'} as={'span'}>
              Privacy Policy
            </Typography>
          </Typography>
          <Button
            disabled={disableSignUpButton}
            type={'submit'}
            variant={'primary'}
            fullWidth={true}
            className={s.button}
          >
            Sign Up
          </Button>
          <Typography variant={'regular-16'} className={s.text}>
            Do you have an account?
          </Typography>
          <Link href={'/sign-in'}>
            <Button variant={'link'}>Sign In</Button>
          </Link>
        </div>
      </form>
    </Card>
  )
}
