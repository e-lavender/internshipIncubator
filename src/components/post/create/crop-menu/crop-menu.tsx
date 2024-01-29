import { PropsWithChildren, useRef } from 'react'

import s from './crop-menu.module.scss'

import { useDisclose, useOnClickOutside } from '@/app'
import { IconType, CropMenuIcon } from '@/components'

type CropMenuProps = PropsWithChildren<{
  icon: IconType
  isImage?: boolean
}>

export const CropMenu = ({ children, icon, isImage }: CropMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclose()
  const menuRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(menuRef, onClose)

  const color = isOpen ? 'var(--color-accent-500)' : 'currentColor'

  return (
    <div className={s.container} ref={menuRef}>
      <button onClick={onToggle} className={s.trigger} tabIndex={0}>
        <CropMenuIcon type={icon} color={color} />
      </button>

      {isOpen && <div className={isImage ? s.image : s.menu}>{children}</div>}
    </div>
  )
}
