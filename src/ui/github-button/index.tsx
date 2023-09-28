import React from 'react'

import { useRouter } from 'next/router'

import s from './github-button.module.scss'

import { GithubIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'

export const GithubButton = () => {
  const router = useRouter()

  const gitHubButtonHandler = () => {
    router.push(`https://flying-merch.vercel.app/api/auth/github`)
  }

  return (
    <Button type={'button'} className={s.button} onClick={gitHubButtonHandler}>
      <GithubIcon width={36} height={36} />
    </Button>
  )
}
