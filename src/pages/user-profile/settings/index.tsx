import { ReactElement } from 'react'

import { Calendar } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'

const GeneralInformation = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>General Information</h1>
      <div style={{ display: 'inline-flex', gap: 30 }}>
        <AccountImagePicker />
        <div>
          <Calendar />
          <br />
          <Calendar isRange />
        </div>
      </div>
    </>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
