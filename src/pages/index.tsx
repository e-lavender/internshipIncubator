import Link from 'next/link'

export default function Home() {
  const id = 'idFromURL'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
      <Link style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }} href={'/sign-in'}>
        sign-in
      </Link>
      <Link style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }} href={'/sign-up'}>
        sign-up
      </Link>
      <Link style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }} href={'/forgot-password'}>
        forgot-password
      </Link>
      <Link
        style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }}
        href={'/create-new-password'}
      >
        create-new-password
      </Link>
      <Link
        style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }}
        href={'/password-recovery'}
      >
        password-recovery
      </Link>
      <Link
        style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }}
        href={`/user-profile/${id}`}
      >
        user-profile
      </Link>
    </div>
  )
}
