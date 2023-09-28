import { z } from 'zod'

export const useSignupForm = () => {
  const signUpFormSchema = z
    .object({
      userName: z
        .string({ required_error: 'Enter User name' })
        .trim()
        .min(6, 'User name must be at least 6 characters')
        .max(30, 'Password must be less than 30 characters')
        .regex(/^[0-9A-Za-z_-]+$/),
      email: z
        .string({ required_error: 'Enter email' })
        .trim()
        .nonempty('Enter email')
        .email('Invalid email address'),

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
      policy: z.literal<boolean>(true),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          message: 'Passwords do not match',
          code: z.ZodIssueCode.custom,
          path: ['confirmPassword'],
        })
      }

      return data
    })

  return { signUpFormSchema }
}
