import React from 'react'

import { GithubIcon } from '@/app'
import { Button } from '@flyingtornado06/ui-kit'

import s from './github-button.module.scss'

type Props = {
  onClick?: (value: boolean) => void
}
export const GithubButton = ({ onClick }: Props) => {
  const gitHubButtonHandler = () => {
    onClick && onClick(true)
    window.location.assign('https://inctagram.work/api/v1/auth/github/login')
  }

  return (
    <button className={s.button} onClick={gitHubButtonHandler} type={'button'}>
      <GithubIcon height={36} width={36} />
    </button>
  )
}
