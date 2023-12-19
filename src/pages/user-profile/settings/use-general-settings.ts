import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTranslation } from '@/app'

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

const useGeneralSettings = () => {
  const { t } = useTranslation()
  const { username, firstName, lastName, birthday } = t.profileSettings.generalSettings

  const GeneralSettingsSchema = z
    .object({
      userName: z
        .string({ required_error: `${username.validation.required}` })
        .trim()
        .min(6, `${username.validation.length}`)
        .max(30, `${username.validation.maxLength}`)
        .regex(/^[0-9a-zA-Z_;-]+$/, `${username.validation.pattern}`),
      firstName: z
        .string({ required_error: `${firstName.validation.required}` })
        .trim()
        .min(6, `${firstName.validation.length}`)
        .max(30, `${firstName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${firstName.validation.pattern}`),
      lastName: z
        .string({ required_error: `${lastName.validation.required}` })
        .trim()
        .min(6, `${lastName.validation.length}`)
        .max(30, `${lastName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${lastName.validation.pattern}`),
      birthday: z.date().optional(),
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
        message: `${birthday.validation.error}`,
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

export default useGeneralSettings
