import { ReactElement } from 'react'

import { ProfileSettingLayout } from '@/templates/layouts'

const AccountManagement = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Account Management</h1>
    </>
  )
}

AccountManagement.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}
export default AccountManagement
