import Link from 'next/link'

import { menuNavigation } from '@/app'

const AccountManagement = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Account Management</h1>
      <Link
        href={menuNavigation.settings()}
        style={{ fontSize: '1.5rem', display: 'inline-block', marginLeft: '2rem' }}
      >
        <h2>🔨 Go Back to Settings</h2>
      </Link>
    </>
  )
}

export default AccountManagement
