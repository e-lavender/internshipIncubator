import { ReactElement, useEffect, useRef } from 'react'

import { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'

import s from './general-information.module.scss'

import { useGeneralSettings, useTranslation } from '@/app'
import { useLocation } from '@/app/hooks/useLocation'
import { useUpdateUserProfileMutation } from '@/app/services/profile/profile.api'
import { GeneralSettingsType } from '@/app/services/profile/profile.api.types'
import { ControlledCalendar, ControlledSelect } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, TextArea, TextField } from '@/ui'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const GeneralInformation = () => {
  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation()
  const { getCities, mappedCities } = useLocation()
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
    formState: { errors, isValid, isDirty },
  } = useGeneralSettings()
  const isDisabledSubmit = !isDirty || !isValid || isLoading
  const selectedCountry = watch('country')

  const onSubmit = (data: GeneralSettingsType) => {
    updateProfile({ ...data, dateOfBirth: data.dateOfBirth?.toString() })
  }

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

      <Button className={s.btn} onClick={handleSubmit(onSubmit)} disabled={isDisabledSubmit}>
        {submitFormBtn.label}
      </Button>
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
