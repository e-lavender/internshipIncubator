import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTranslation } from '@/app/hooks'

export const useNewPasswordForm = () => {
  const { t } = useTranslation()
  const { password, passwordConfirmation } = t.newPasswordPage

  const NewPasswordSchema = z
    .object({
      password: z
        .string({ required_error: `${password.validation.required}` })
        .trim()
        .min(6, `${password.validation.length}`)
        .max(20, `${password.validation.maxLength}`)
        .regex(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,20}$/,
          `${password.validation.pattern}`
        ),
      confirmPassword: z
        .string({ required_error: `${passwordConfirmation.validation.required}` })
        .trim(),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: `${passwordConfirmation.validation.required}`,
      path: ['confirmPassword'],
    })

  type NewPassFormType = z.infer<typeof NewPasswordSchema>

  return useForm<NewPassFormType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  })
}
