import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import s from './sign-up-form.module.scss'
import { signUpFormSchema, SignUpFormType } from './sign-up-schema'

import { ControlledTextField } from '@/components/text-field-controlled/controlled-text-field'
import { Checkbox } from '@/ui'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { GithubButton } from '@/ui/github-button'
import { GoogleButton } from '@/ui/google-button'
import { Typography } from '@/ui/typography/typography'

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
  })
  const onSubmitForm = (data: SignUpFormType) => {}

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
          <Checkbox
            left={true}
            labelTitle={
              <Typography variant={'small'}>
                {'I agree to the Terms of Service and Privacy Policy'}
              </Typography>
            }
          />
          <Button type={'submit'} variant={'primary'} fullWidth={true} className={s.button}>
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
