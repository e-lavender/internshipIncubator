import Link from 'next/link'

import { menuNavigation } from '@/app'
import { UserDevices } from '@/modules'

const Devices = () => {
  return (
    <>
      <Link
        href={menuNavigation.settings()}
        style={{ fontSize: '1.5rem', display: 'inline-block', margin: '5rem 2rem' }}
      >
        <h2>🔨 Go Back to Settings</h2>
      </Link>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Devices</h1>
      <UserDevices />
    </>
  )
}

export default Devices
