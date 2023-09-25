import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).*$/
const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .trim()
    .nonempty('Enter email')
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .trim()
    .refine(value => passwordRegex.test(value), {
      message:
        'Password must contain a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
    }),
})

export type LoginFormType = z.infer<typeof schema>

export const useSignInForm = () => {
  return useForm<LoginFormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })
}
