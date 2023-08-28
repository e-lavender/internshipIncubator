import Link from 'next/link'

export default function Home() {
  const id = 'idFromURL'

  return (
    <div>
      <Link href={'/sign-in'}>sign-in</Link>
      <Link href={'/sign-up'}>sign-up</Link>
      <Link href={'/forgot-password'}>forgot-password</Link>
      <Link href={'/create-new-password'}>create-new-password</Link>
      <Link href={'/password-recovery'}>password-recovery</Link>
      <Link href={`/user-profile/${id}`}>user-profile</Link>
    </div>
  )
}
