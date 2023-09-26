import { SyntheticEvent, useRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'

import s from './forgot-password-form.module.scss'

import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'

export const ForgotPasswordForm = () => {
  const { locale } = useRouter()
  const reChaptchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const token = reChaptchaRef?.current?.getValue()

    reChaptchaRef?.current?.reset()
    const encodedURL = encodeURI(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
    )

    try {
      const response = await fetch(encodedURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        mode: 'no-cors',
      })

      if (!response.ok) {
        throw Error('Invalid token. Access denied.')
      }

      console.log('response from google >>> ', response)
    } catch (error) {
      console.error(error)
    }

    console.log({
      token,
      boolean: Boolean(token),
    })
  }

  return (
    <Card className={s.container}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label={'Email'}
          className={s.email}
          error={"User with this email doesn't exist"}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth className={s.button}>
          Send Link
        </Button>
        <Link href={'/sign-in'}>
          <Typography as={'h3'} variant={'bold-16'} className={s.link}>
            Back to Sign In
          </Typography>
        </Link>

        <ReCAPTCHA
          ref={reChaptchaRef}
          hl={locale}
          theme={'dark'}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
          className={s.recaptcha}
        />
      </form>
    </Card>
  )
}
