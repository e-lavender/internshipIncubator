import { ReactElement, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import s from './general-information.module.scss'

import { setDateFormat, useGeneralSettings, UserProfileType, useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import {
  useGetProfileQuery,
  useUpdateUserProfileMutation,
} from '@/app/services/profile/profile.api'
import { GeneralSettingsType } from '@/app/services/profile/profile.api.types'
import { ControlledCalendar, ControlledSelect, LoaderV2 } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, TextArea, TextField } from '@/ui'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

type LocationType = {
  country?: string
  city: string
}

type UserProfileModel = UserProfileType & { country?: string }

const GeneralInformation = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileQuery()
  const [updateProfile, { isLoading: isProfileUpdating }] = useUpdateUserProfileMutation()
  const [getCities, { data: cities, isLoading: citiesLoading }] = useGetCitiesMutation()

  const { t } = useTranslation()
  const { push } = useRouter()
  const { username, firstName, lastName, birthday, country, city, aboutMe, submitFormBtn } =
    t.profileSettings.generalSettings

  const userProfile: UserProfileModel | undefined = useMemo(() => {
    if (data) {
      const { id, avatars, createdAt, ...rest } = data

      const location = JSON.parse(data.city)

      return {
        ...rest,
        country: location?.country,
        city: location?.city,
        dateOfBirth: setDateFormat(data?.dateOfBirth),
      }
    }
  }, [data])

  const {
    reset,
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, isDirty, isLoading },
  } = useGeneralSettings(userProfile)

  const isDisabledSubmit = !isValid || isLoading
  const selectedCountry = watch('country')

  const onSubmit = handleSubmit((settingsData: GeneralSettingsType) => {
    const { userName, firstName, lastName, city, country, dateOfBirth, aboutMe } = settingsData
    //const { id } = data
    const location: LocationType = {
      country: country || '',
      city: city || '',
    }
    const serializedCity = JSON.stringify(location)
    const date = dateOfBirth ? new Date(dateOfBirth).toISOString() : null

    updateProfile({
      userName,
      firstName,
      lastName,
      city: serializedCity,
      dateOfBirth: date,
      aboutMe: aboutMe || null,
    }).then(void push(menuNavigation.profile(data?.id)))
  })

  useEffect(() => {
    reset(userProfile)
  }, [data])

  useEffect(() => {
    if (selectedCountry) {
      setValue('city', undefined)
      getCities({ country: selectedCountry })
    }
  }, [getCities, selectedCountry])

  const loaderLabel: string = (isProfileUpdating && 'Saving...') || 'Loading...'

  return (
    <div className={s.container}>
      <form className={s.content}>
        <div className={s.image}>
          <AccountImagePicker />
        </div>

        <div className={s.wrapper}>
          <TextField
            {...register('userName')}
            label={username.label}
            required
            error={errors?.userName?.message}
          />
          <TextField
            {...register('firstName')}
            label={firstName.label}
            required
            error={errors?.firstName?.message}
          />
          <TextField
            {...register('lastName')}
            label={lastName.label}
            required
            error={errors?.lastName?.message}
          />

          <ControlledCalendar
            label={birthday.label}
            control={control}
            name={'dateOfBirth'}
            error={errors?.dateOfBirth?.message}
          />

          <div className={s.select}>
            <ControlledSelect
              label={country.label}
              control={control}
              name={'country'}
              options={COUNTRIES_DATA}
            />
            <ControlledSelect
              isLoading={citiesLoading}
              label={city.label}
              options={cities}
              name={'city'}
              control={control}
              disabled={citiesLoading}
            />
          </div>

          <TextArea
            {...register('aboutMe')}
            label={`${aboutMe.label}`}
            placeholder={aboutMe.placeholder}
            maxLength={200}
          />
        </div>
      </form>

      <div className={s.divider}></div>

      <Button className={s.btn} onClick={onSubmit} disabled={isDisabledSubmit}>
        {submitFormBtn.label}
      </Button>

      <LoaderV2 isLoading={isProfileLoading || isProfileUpdating} label={loaderLabel} />
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
