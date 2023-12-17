import { ReactElement, useMemo, useState } from 'react'

import { useController, useForm } from 'react-hook-form'

import s from './general-information.module.scss'

import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import { ControlledCalendar } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, CustomSelect, Select, TextArea, TextField } from '@/ui'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

type GeneralSettingsType = {
  userName: string
  firstName: string
  lastName: string
  age?: string
  country?: string
  city?: string
  aboutMe?: string
}

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

  const defaultSettingsValues = {
    userName: '',
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    city: '',
    aboutMe: '',
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneralSettingsType>({
    defaultValues: {
      ...defaultSettingsValues,
    },
  })

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
          <TextField {...register('userName')} label={'Username'} required />
          <TextField {...register('firstName')} label={'First Name'} required />
          <TextField {...register('lastName')} label={'Last Name'} required />

          <ControlledCalendar label={'Date of birth'} control={control} name={'age'} />

          <div className={s.select}>
            <CustomSelect
              value={countryValue}
              onSelect={setCountry}
              options={COUNTRIES_DATA}
              label={'Select your country'}
            />
            <CustomSelect
              label={'Select your city'}
              value={cityValue}
              onSelect={city => onCityChange(city?.value)}
              options={mappedCities}
            />
          </div>

          <TextArea
            {...register('aboutMe')}
            label={'About me'}
            placeholder={'Please provide information here...'}
          />
        </div>
      </form>

      <div className={s.divider}></div>

      <Button className={s.btn} onClick={handleSubmit(onSubmit)}>
        Save Changes
      </Button>
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
