import React from 'react'

import { useRouter } from 'next/router'

import s from './google-button.module.scss'

import { GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'
export const GoogleButton = () => {
  const { push } = useRouter()
  const link = ''

  return (
    <Button
      className={s.button}
      as={'a'}
      href={'#'}
      onClick={() => {
        push(link).then(() => {
          console.log('redirected to the google oAuth page')
        })
      }}
    >
      <GoogleIcon width={36} height={36} />
    </Button>
  )
}
