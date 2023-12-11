import { ReactElement } from 'react'

import s from './general-information.module.scss'

import { Calendar } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'

const GeneralInformation = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>General Information</h1>
      <div className={s.container}>
        <AccountImagePicker />
        <div className={s.wrapper}>
          <Calendar />
        </div>
      </div>
    </>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
