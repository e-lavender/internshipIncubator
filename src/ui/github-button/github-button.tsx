import React from 'react'

import { useRouter } from 'next/router'

import s from './github-button.module.scss'

import { GithubIcon } from '@/app'
import { Button } from '@/ui'
type Props = {
  onClick?: (value: boolean) => void
}
export const GithubButton = ({ onClick }: Props) => {
  const gitHubButtonHandler = () => {
    onClick && onClick(true)
    window.location.assign('https://inctagram.work/api/v1/auth/github/login')
  }

  return (
    <Button type={'button'} className={s.button} onClick={gitHubButtonHandler}>
      <GithubIcon width={36} height={36} />
    </Button>
  )
}
