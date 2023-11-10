import { useState } from 'react'

import { useRouter } from 'next/router'

import s from './create-new-password.module.scss'

import { authNavigationUrls, useTranslation } from '@/app'
import { useNewPasswordForm } from '@/modules/create-new-password-form/validation-schema'
import { Button, Card, Loader, TextField, Typography } from '@/ui'

export const NewPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const { t } = useTranslation()

  const { title, password, passwordConfirmation, description, button } = t.newPasswordPage

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
  } = useNewPasswordForm()

  const setNewPassword = handleSubmit((data, e?) => {
    e?.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      void router.push(authNavigationUrls.newPasswordConfirmation())

      setIsLoading(false)
      reset()
    }, 1500)
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        {title}
      </Typography>
      <form onSubmit={setNewPassword}>
        <TextField
          {...register('password')}
          label={password.label}
          inputType={'password'}
          className={s.email}
          error={errors?.password?.message}
        />

        <TextField
          {...register('confirmPassword')}
          label={passwordConfirmation.label}
          inputType={'password'}
          className={s.confirmation}
          error={errors?.confirmPassword?.message}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          {description}
        </Typography>

        <Button fullWidth className={s.button} type={'submit'} disabled={!isValid}>
          {isLoading ? <Loader /> : button.submit}
        </Button>
      </form>
    </Card>
  )
}
