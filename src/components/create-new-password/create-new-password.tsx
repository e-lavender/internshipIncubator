import { BaseSyntheticEvent, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './create-new-password.module.scss'

import { NewPasswordConfirmationRedirection } from '@/components/create-new-password/create-new-password-confirmation/create-new-password-confirmation'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'

const schema = z
  .object({
    password: z
      .string({ required_error: 'Enter password' })
      .trim()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be less than 20 characters')
      .regex(
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
        'One lowercase letter, digit, special character'
      ),
    confirmPassword: z.string({ required_error: 'Confirm password' }).trim(),
  })
  .superRefine((input, ctx) => {
    if (input.password !== input.confirmPassword) {
      ctx.addIssue({
        message: 'The passwords must match',
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
      })
    }

    return input
  })

type NewPassFormType = z.infer<typeof schema>

export const NewPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<NewPassFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  })

  const setNewPassword = handleSubmit((data: NewPassFormType, e?: BaseSyntheticEvent) => {
    e?.preventDefault()

    console.log(data)

    setIsSubmitted(true)
    reset()
  })

  if (isSubmitted) {
    return <NewPasswordConfirmationRedirection delay={60000} />
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        Create New Password
      </Typography>
      <form onSubmit={setNewPassword}>
        <TextField
          {...register('password')}
          label={'New Password'}
          inputType={'password'}
          className={s.email}
          error={errors?.password?.message}
        />

        <TextField
          {...register('confirmPassword')}
          label={'Password confirmation'}
          inputType={'password'}
          className={s.confirmation}
          error={errors?.confirmPassword?.message}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          Your password must be between 6 and 20 characters
        </Typography>

        <Button fullWidth className={s.button} type={'submit'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
