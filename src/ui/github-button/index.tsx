import React, { FC } from 'react'

import s from './github-button.module.scss'

import { GithubIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'

export const GithubButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <Button className={s.button} onClick={onClick}>
      <GithubIcon width={36} height={36} />
    </Button>
  )
}
