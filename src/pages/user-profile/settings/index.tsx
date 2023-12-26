import { ReactElement, useEffect, useMemo } from 'react'

import s from './general-information.module.scss'

import { useGeneralSettings, useTranslation } from '@/app'
import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import { GeneralSettingsType } from '@/app/services/profile'
import { useUpdateUserProfileMutation } from '@/app/services/profile/profile.api'
import { ControlledCalendar, ControlledSelect } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, TextArea, TextField } from '@/ui'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const GeneralInformation = () => {
  const [getCities, { data: cities }] = useGetCitiesMutation()
  const [updateProfile, {}] = useUpdateUserProfileMutation()

  const mappedCities: SelectValue[] | undefined = useMemo(() => {
    return cities?.data.map(city => {
      return { value: city.toLowerCase(), label: city }
    })
  }, [cities])

  const { t } = useTranslation()
  const {
    username,
    firstName: firstname,
    lastName: lastname,
    birthday,
    country,
    city,
    aboutMe,
    submitFormBtn,
  } = t.profileSettings.generalSettings

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useGeneralSettings()

  const selectedCountry = watch('country')

  const onSubmit = (data: GeneralSettingsType) => {
    const { dateOfBirth } = data
    const formattedDate = dateOfBirth instanceof Date ? dateOfBirth?.toISOString() : dateOfBirth

    updateProfile({
      ...data,
      dateOfBirth: formattedDate,
    })
  }

  const watchAllFields = watch()
  const { userName, firstName, lastName } = watchAllFields
  const isDisabled = !userName || !firstName || !lastName

  useEffect(() => {
    if (selectedCountry) {
      getCities({ country: selectedCountry })
    }
  }, [getCities, selectedCountry])

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
            label={firstname.label}
            required
            error={errors?.firstName?.message}
          />
          <TextField
            {...register('lastName')}
            label={lastname.label}
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
              label={city.label}
              options={mappedCities}
              name={'city'}
              control={control}
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

      <Button className={s.btn} onClick={handleSubmit(onSubmit)} disabled={isDisabled}>
        {submitFormBtn.label}
      </Button>
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
