import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { isOldEnough, useTranslation } from '@/app'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'

export const useGeneralSettings = () => {
  const { t } = useTranslation()
  const { username, firstName, lastName, birthday } = t.profileSettings.generalSettings

  const { data: userProfile } = useGetProfileQuery()

  const GeneralSettingsSchema = z
    .object({
      userName: z
        .string()
        .trim()
        .min(6, `${username.validation.length}`)
        .max(30, `${username.validation.maxLength}`)
        .regex(/^[0-9a-zA-Z_;-]+$/, `${username.validation.pattern}`),
      firstName: z
        .string()
        .trim()
        .min(1, `${firstName.validation.length}`)
        .max(20, `${firstName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${firstName.validation.pattern}`),
      lastName: z
        .string()
        .trim()
        .min(1, `${lastName.validation.length}`)
        .max(20, `${lastName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${lastName.validation.pattern}`),
      dateOfBirth: z.union([z.date(), z.string()]).optional(),
      country: z.string().optional(),
      city: z.string().optional(),
      aboutMe: z.string().optional(),
    })
    .refine(
      data => {
        if (data.dateOfBirth) {
          const ageLimit: number = 13
          const dateOfBirth = new Date(data.dateOfBirth)

          return isOldEnough(dateOfBirth, ageLimit)
        }

        return data
      },
      {
        message: `${birthday.validation.error}`,
        path: ['dateOfBirth'],
      }
    )

  const formattedDate = useMemo(() => {
    return userProfile?.dateOfBirth ? new Date(userProfile?.dateOfBirth) : undefined
  }, [userProfile?.dateOfBirth])

  type GeneralSettingsFormType = z.infer<typeof GeneralSettingsSchema>

  return useForm<GeneralSettingsFormType>({
    resolver: zodResolver(GeneralSettingsSchema),
    defaultValues: {
      ...userProfile,
      dateOfBirth: formattedDate,
    },
    mode: 'all',
  })
}
