import { BaseSyntheticEvent, useRef, useState } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { ControlledReCaptcha } from '@/ui/recaptcha/controlled-recaptcha/controlled-recaptcha'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'

const schema = z.object({
  email: z
    .string({ required_error: 'Enter email' })
    .trim()
    .nonempty('Enter email')
    .email({ message: "User with this email doesn't exist" }),
  token: z
    .string({
      required_error: 'Please verify that you are not a robot',
      invalid_type_error: 'Please verify that you are not a robot',
    })
    .trim()
    .nonempty(),
})

type ForgotPassFormType = z.infer<typeof schema>

export const ForgotPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const { locale } = useRouter()
  const reCaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    control,
    resetField,
    setValue,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPassFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      token: '',
    },
    mode: 'all',
  })

  const sendForm = handleSubmit(async (data: ForgotPassFormType, e?: BaseSyntheticEvent) => {
    e?.preventDefault()

    // const token = reCaptchaRef?.current?.getValue()
    //
    // reCaptchaRef?.current?.reset()
    //
    // if (token) setTokenCopy(token)

    // const token = getValues('token')

    console.log(data)

    try {
      const response = await fetch('http://localhost:5000/verify', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw Error('Unsuccessful request')
      }

      const json = await response.json()
      const { message } = json

      console.log('Response from sever >>>', message)

      setIsSubmitted(true)

      resetField('email')
      setValue('token', 'submitted', { shouldValidate: true })
    } catch (error) {
      setIsSubmitted(true)
      resetField('email')

      alert(error)
    }
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        Forgot Password
      </Typography>
      <form onSubmit={sendForm}>
        {/*{DEVTOOLS}*/}
        <DevTool control={control} />
        {/*{DEVTOOLS}*/}

        <TextField
          {...register('email')}
          label={'Email'}
          className={s.email}
          error={errors?.email?.message}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>

        {isSubmitted && (
          <Typography as={'p'} variant={'regular-14'} className={s.submitted}>
            The link has been sent by email. If you don’t receive an email send link again
          </Typography>
        )}

        <Button fullWidth className={s.button} type={'submit'} disabled={!isValid}>
          {isSubmitted ? 'Send Link Again' : 'Send Link'}
        </Button>
        <Link href={'/sign-in'}>
          <Typography as={'h3'} variant={'bold-16'} className={s.link}>
            Back to Sign In
          </Typography>
        </Link>

        {!isSubmitted && (
          <ControlledReCaptcha
            control={control}
            name={'token'}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
            hl={locale}
            theme={'dark'}
            className={s.recaptcha}
            error={errors?.token?.message}
          />
        )}
      </form>
    </Card>
  )
}
