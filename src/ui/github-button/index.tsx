import React from 'react'

import { useRouter } from 'next/router'

import { Button } from '@/ui/button'

export const GithubButton = () => {
  const { push } = useRouter()
  const link = ''

  return (
    <Button
      as={'a'}
      href={'#'}
      onClick={() => {
        push(link).then(() => {
          console.log('redirected to the github oAuth page')
        })
      }}
    >
      <GithubIcon width={36} height={36} />
    </Button>
  )
}
