import React, { PropsWithChildren } from 'react'

import s from './crop-menu.module.scss'

import { useDisclose } from '@/app'
import { IconType } from '@/components/image-slider/image-slider-types'
import CropMenuIcon from '@/components/post/create/crop-menu/crop-menu-icon'

type CropMenuProps = PropsWithChildren<{
  icon: IconType
  isImage?: boolean
}>

const CropMenu = ({ children, icon, isImage }: CropMenuProps) => {
  const { isOpen: isMenuOpened, onOpen: openMenu, onToggle, onClose } = useDisclose()
  const color = isMenuOpened ? 'var(--color-accent-500)' : undefined

  return (
    <div className={s.container} tabIndex={0}>
      <button onClick={onToggle} className={s.trigger}>
        <CropMenuIcon type={icon} color={color} />
      </button>
      {isMenuOpened && <div className={!isImage ? s.menu : s.image}>{children}</div>}
    </div>
  )
}

export default CropMenu
