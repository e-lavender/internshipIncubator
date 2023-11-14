import Link from 'next/link'

import { menuNavigation } from '@/app'
import { AccountManagement } from '@/modules'

const AccountSettings = () => {
  return (
    <>
      <Link
        href={menuNavigation.settings()}
        style={{ fontSize: '1.5rem', display: 'inline-block', margin: '5rem 2rem' }}
      >
        <h2>🔨 Go Back to Settings</h2>
      </Link>
      <h1 style={{ textAlign: 'center', margin: '5rem 0' }}>Account Management</h1>
      <AccountManagement />
    </>
  )
}

export default AccountSettings
