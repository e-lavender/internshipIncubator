import React from 'react'

import { useRouter } from 'next/router'

import s from './github-button.module.scss'

import { GithubIcon } from '@/app'
import { Button } from '@/ui'
type Props = {
  onClick?: (value: boolean) => void
}
export const GithubButton = ({ onClick }: Props) => {
  const router = useRouter()
  const gitHubButtonHandler = () => {
    router.push(`https://flying-merch.vercel.app/api/auth/github`).then(() => {
      onClick && onClick(true)
    })
  }

  return (
    <Button type={'button'} className={s.button} onClick={gitHubButtonHandler}>
      <GithubIcon width={36} height={36} />
    </Button>
  )
}
