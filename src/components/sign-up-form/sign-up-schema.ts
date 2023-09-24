import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    userName: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(6, 'Password must be at least 8 characters')
      .max(30)
      .regex(/^[0-9A-Za-z_-]+$/),
    email: z.string().trim().email('Invalid email address').nonempty('Enter email'),

    password: z.string().trim().nonempty('Enter password'),
    confirmPassword: z.string().trim().nonempty('Confirm password'),
  })
  .refine(
    values => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    }
  )

export type SignUpFormType = z.infer<typeof signUpFormSchema>
