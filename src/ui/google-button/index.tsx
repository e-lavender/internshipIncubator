import React, { FC } from 'react'

import { useRouter } from 'next/router'

import s from './google-button.module.scss'

import { GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'
export const GoogleButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { push } = useRouter()
  const link = ''

  return (
    <Button className={s.button} onClick={onClick}>
      <GoogleIcon width={36} height={36} />
    </Button>
  )
}
