import React from 'react'

import { useRouter } from 'next/router'

import s from './google-button.module.scss'

import { GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'

type Props = {
  onClick?: (value: boolean) => void
}
export const GoogleButton = ({ onClick }: Props) => {
  const router = useRouter()
  const googleButtonHandler = () => {
    router.push(`https://flying-merch.vercel.app/api/auth/google`).then(() => {
      onClick && onClick(true)
    })
  }

  return (
    <Button type={'button'} className={s.button} onClick={googleButtonHandler}>
      <GoogleIcon width={36} height={36} />
    </Button>
  )
}
