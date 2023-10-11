import { useState } from 'react'

import { DevTool } from '@hookform/devtools'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './forgot-password-form.module.scss'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useTranslation } from '@/app/hooks'
import { usePasswordRecoveryMutation } from '@/app/services/auth/auth.api'
import { SendEmailModal } from '@/components'
import { useForgotPasswordForm } from '@/components/forgot-password-form/validation-schema'
import { Loader, Button, Card } from '@/ui'
import { ControlledReCaptcha } from '@/ui/recaptcha/controlled-recaptcha/controlled-recaptcha'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'

export const ForgotPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { locale } = useRouter()
  const [recoverPassword, { isLoading }] = usePasswordRecoveryMutation()

  const { t } = useTranslation()
  const { title, email, message, button } = t.forgotPasswordPage

  const labels = {
    button: isSubmitted ? button.submitV2 : button.submitV1,
    submission() {
      return isLoading ? <Loader /> : this.button
    },
  }

  const {
    control,
    resetField,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForgotPasswordForm()

  const sendForm = handleSubmit((data, e?) => {
    e?.preventDefault()

    recoverPassword(data)
      .unwrap()
      .then(() => {
        resetField('email')
        setIsSubmitted(true)
      })
      .catch(() => {
        setError(email.validation.serverError)

        setTimeout(() => {
          setError('')
          resetField('email')
        }, 3000)
      })
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        {title}
      </Typography>
      <form onSubmit={sendForm}>
        {/*{DEVTOOLS}*/}
        <DevTool control={control} />
        {/*{DEVTOOLS}*/}

        <TextField
          {...register('email')}
          label={email.label}
          className={s.email}
          error={error || errors?.email?.message}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          {message.beforeSubmission}
        </Typography>

        {isSubmitted && (
          <Typography as={'p'} variant={'regular-14'} className={s.submitted}>
            {message.afterSubmission}
          </Typography>
        )}

        <Button fullWidth className={s.button} type={'submit'} disabled={!isValid}>
          {labels.submission()}
        </Button>
        <Link href={authNavigationUrls.signIn()}>
          <Typography as={'h3'} variant={'bold-16'} className={s.link}>
            {button.link}
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
