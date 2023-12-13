import React from 'react'

import { CustomSelect } from '@/ui'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

export const CountriesSelect = () => {
  return (
    <div>
      <CustomSelect label={'Countries'} options={COUNTRIES_DATA} />
    </div>
  )
}
