import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './crop-menu.module.scss'

import { Typography } from '@/ui'

type CropMenuItemType = {
  icon: ReactNode
  title: string
  onClick: () => void
  selected: boolean
}

export const CropMenuItem = ({ icon, onClick, title, selected }: CropMenuItemType) => {
  const className = clsx(s.menuItem, selected && s.selected)

  return (
    <div className={className} onClick={onClick}>
      <Typography variant={'h3'} as={'h3'} className={className}>
        {title}
      </Typography>
      <div className={className}>{icon}</div>
    </div>
  )
}
