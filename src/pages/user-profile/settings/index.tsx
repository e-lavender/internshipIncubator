import { ReactElement } from 'react'

import { ProfileSettingLayout } from '@/templates/layouts'

const GeneralInformation = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>General Information</h1>
    </>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
