import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type GeneralSettingsType = {
  userName: string
  firstName: string
  lastName: string
  birthday?: Date
  country?: string
  city?: string
  aboutMe?: string
}

const defaultSettingsValues = {
  userName: '',
  firstName: '',
  lastName: '',
  birthday: undefined,
  country: '',
  city: '',
  aboutMe: '',
}

export const useGeneralSettings = () => {
  const GeneralSettingsSchema = z
    .object({
      userName: z
        .string()
        .trim()
        .min(6, `At least 6 characters`)
        .max(30, `Max 30 characters`)
        .regex(/^[0-9a-zA-Z_;-]+$/, `RegExp error`),
      firstName: z
        .string()
        .trim()
        .min(2, `At least 2 characters`)
        .max(20, `Max 20 characters`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `RegExp error`),
      lastName: z
        .string()
        .trim()
        .min(2, `At least 2 characters`)
        .max(20, `Max 20 characters`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `RegExp error`),
      birthday: z
        .date({
          required_error: 'Please select a date and time',
          invalid_type_error: "That's not a date!",
        })
        .optional(),
      country: z.string().optional(),
      city: z.string().optional(),
      aboutMe: z.string().optional(),
    })
    .refine(
      data => {
        if (data.birthday) {
          const isOldEnough = new Date().getFullYear() - 13 <= data.birthday.getFullYear()

          return !isOldEnough
        }

        return data
      },
      {
        message: `A user under 13 cannot create a profile.`,
        path: ['birthday'], // path of error
      }
    )

  type GeneralSettingsFormType = z.infer<typeof GeneralSettingsSchema>

  return useForm<GeneralSettingsFormType>({
    resolver: zodResolver(GeneralSettingsSchema),
    defaultValues: {
      ...defaultSettingsValues,
    },
    mode: 'all',
  })
}
