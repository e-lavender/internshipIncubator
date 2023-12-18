import { ReactElement, useMemo } from 'react'

import s from './general-information.module.scss'

import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import { Calendar } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, CustomSelect, TextArea, TextField } from '@/ui'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const GeneralInformation = () => {
  const [getCities, { data: cities }] = useGetCitiesMutation()
  const setCountry = (country: SelectValue | undefined) => {
    country?.value && getCities({ country: country?.value })
  }
  const mappedCities: SelectValue[] | undefined = useMemo(() => {
    return cities?.data.map(city => {
      return { value: city.toLowerCase(), label: city }
    })
  }, [cities])

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.image}>
          <AccountImagePicker />
        </div>

        <div className={s.wrapper}>
          <TextField label={'Username'} required />
          <TextField label={'First Name'} required />
          <TextField label={'Last Name'} required />

          <Calendar />

          <div className={s.select}>
            <CustomSelect
              onSelect={setCountry}
              options={COUNTRIES_DATA}
              label={'Select your country'}
            />
            <CustomSelect label={'Select your city'} options={mappedCities} />
          </div>

          <TextArea label={'About me'} placeholder={'Please provide information here...'} />
        </div>
      </div>

      <div className={s.divider}></div>

      <Button className={s.btn}>Save Changes</Button>
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
