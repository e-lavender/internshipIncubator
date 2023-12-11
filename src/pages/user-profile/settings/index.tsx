import { ReactElement } from 'react'

import s from './general-information.module.scss'

import { Calendar } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, Select, TextArea, TextField } from '@/ui'

const GeneralInformation = () => {
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
            <Select value={'-'} onChange={console.log} options={[]} label={'Select your country'} />
            <Select value={'-'} onChange={console.log} options={[]} label={'Select your city'} />
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
