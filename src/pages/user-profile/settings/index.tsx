import { ReactElement, useEffect, useMemo } from 'react'

import { useController } from 'react-hook-form'

import s from './general-information.module.scss'

import {
  GeneralSettingsType,
  setDateFormat,
  updateSettings,
  useAppDispatch,
  useAppSelector,
  useGeneralSettings,
  useTranslation,
  validateForm,
} from '@/app'
import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import { ControlledCalendar, ControlledSelect } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, CustomSelect, Select, TextArea, TextField } from '@/ui'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const GeneralInformation = () => {
  const [getCities, { data: cities }] = useGetCitiesMutation()

  const mappedCities: SelectValue[] | undefined = useMemo(() => {
    return cities?.data.map(city => {
      return { value: city.toLowerCase(), label: city }
    })
  }, [cities])

  const { t } = useTranslation()
  const { username, firstName, lastName, birthday, country, city, aboutMe, submitFormBtn } =
    t.profileSettings.generalSettings

  const {
          trigger,
          setValue,
          register,
          getValues,,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useGeneralSettings()
  const selectedCountry = watch('country')

  const onSubmit = (data: GeneralSettingsType) => {
    console.log(data)
  }

    const dispatch = useAppDispatch()
    const settingsCurrentState = useAppSelector(state => state.settings)

    useEffect(() => {
        setValue('birthday', settingsCurrentState.birthday)
        validateForm(settingsCurrentState, trigger)

        return () => {
            const newState: GeneralSettingsType = getValues()

            if (JSON.stringify(newState) === JSON.stringify(settingsCurrentState)) return

            const formattedDate: string = setDateFormat(newState.birthday)

            dispatch(
                updateSettings({
                    ...newState,
                    birthday: formattedDate,
                })
            )
        }
    }, [])

  useEffect(() => {
    if (selectedCountry) {
      getCities({ country: selectedCountry })
    }
  }, [selectedCountry])

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
