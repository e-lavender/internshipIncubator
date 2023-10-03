import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTranslation } from '@/app/hooks'

export const useForgotPasswordForm = () => {
  const { t } = useTranslation()
  const { email, token } = t.forgotPasswordPage

  const ForgotPasswordSchema = z.object({
    email: z
      .string({ required_error: `${email.validation.required}` })
      .trim()
      .nonempty(`${email.validation.required}`)
      .email({ message: `${email.validation.invalidEmail}` }),
    token: z
      .string({
        required_error: `${token.validation.required}`,
        invalid_type_error: `${token.validation.required}`,
      })
      .trim()
      .nonempty(),
  })

  type ForgotPassFormType = z.infer<typeof ForgotPasswordSchema>

  return useForm<ForgotPassFormType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
      token: '',
    },
    mode: 'all',
  })
}
