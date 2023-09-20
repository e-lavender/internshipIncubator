import React, { FC } from 'react'

import s from './google-button.module.scss'

import { GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'

export const GoogleButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Button className={s.button} onClick={onClick}>
      <GoogleIcon width={36} height={36} />
    </Button>
  )
}
