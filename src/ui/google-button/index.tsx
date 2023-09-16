import React from 'react'

import { useRouter } from 'next/router'

import { GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'

const GoogleButton = () => {
  const { push } = useRouter()
  const link = ''

  return (
    <Button
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

export default GoogleButton
