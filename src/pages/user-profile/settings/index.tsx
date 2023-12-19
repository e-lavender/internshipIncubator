import { ReactElement, useMemo, useRef } from 'react'

import { useController } from 'react-hook-form'

import s from './general-information.module.scss'

import { GeneralSettingsType, useGeneralSettings, useTranslation } from '@/app'
import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import { ControlledCalendar } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, CustomSelect, TextArea, TextField } from '@/ui'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const GeneralInformation = () => {
  const [getCities, { data: cities }] = useGetCitiesMutation()
  const setCountry = (country: SelectValue | undefined) => {
    if (!country?.value) return

    getCities({ country: country?.value })
    onCountryChange(country?.value)
  }
  const mappedCities: SelectValue[] | undefined = useMemo(() => {
    return cities?.data.map(city => {
      return { value: city.toLowerCase(), label: city }
    })
  }, [cities])

  const { t } = useTranslation()
  const { username, firstName, lastName, birthday, country, city, aboutMe, submitFormBtn } =
    t.profileSettings.generalSettings

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useGeneralSettings()

  const {
    field: { value: countryValue, onChange: onCountryChange },
  } = useController({
    name: 'country',
    control,
  })

  const {
    field: { value: cityValue, onChange: onCityChange },
  } = useController({
    name: 'city',
    control,
  })

  const onSubmit = (data: GeneralSettingsType) => {
    console.log(data)
  }

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
            name={'birthday'}
            error={errors?.birthday?.message}
          />

          <div className={s.select}>
            <CustomSelect
              value={countryValue}
              onSelect={setCountry}
              options={COUNTRIES_DATA}
              label={country.label}
            />
            <CustomSelect
              label={city.label}
              value={cityValue}
              onSelect={city => onCityChange(city?.value)}
              options={mappedCities}
            />
          </div>

          <TextArea
            {...register('aboutMe')}
            label={aboutMe.label}
            placeholder={aboutMe.placeholder}
            maxLength={200}
          />
        </div>
      </form>

      <div className={s.divider}></div>

      <Button className={s.btn} onClick={handleSubmit(onSubmit)} disabled={!isValid}>
        {submitFormBtn.label}
      </Button>
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
