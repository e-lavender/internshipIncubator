import React, { PropsWithChildren } from 'react'

import s from './crop-menu.module.scss'

import { useDisclose } from '@/app'
import CropMenuIcon from '@/components/image-slider/crop-menu/crop-menu-icon'
import { IconType } from '@/components/image-slider/image-slider-types'

type CropMenuProps = PropsWithChildren<{
  icon: IconType
}>

const CropMenu = ({ children, icon }: CropMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclose()
  const color = isOpen ? 'var(--color-accent-500)' : undefined

  return (
    <div className={s.container} tabIndex={0}>
      <button onClick={onToggle} onBlur={onClose} className={s.trigger}>
        <CropMenuIcon type={icon} color={color} />
        {isOpen && <div className={s.menu}>{children}</div>}
      </button>
    </div>
  )
}

export default CropMenu
