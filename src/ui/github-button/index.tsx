import React from 'react'

import { useRouter } from 'next/router'

import s from './github-button.module.scss'

import { GithubIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'
export const GithubButton = () => {
  const { push } = useRouter()
  const link = ''

  return (
    <Button
      className={s.button}
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
