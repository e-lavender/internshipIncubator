import Link from 'next/link'

import { menuNavigation } from '@/app'
import { Typography } from '@/ui'

const GeneralInformation = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>General Information</h1>

      <ul
        style={{
          listStyleType: 'none',
          padding: '0 4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem ',
          fontSize: '1.5rem',
        }}
      >
        <li>
          <Link href={menuNavigation.devices()}>
            <h2>🔌 Devices</h2>
          </Link>
        </li>
        <li>
          <Link href={menuNavigation.account()}>
            <h2>📝 Account Management</h2>
          </Link>
        </li>
        <li>
          <Link href={menuNavigation.payments()}>
            <h2>💰 My Payments</h2>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default GeneralInformation
