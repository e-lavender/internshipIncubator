import { PropsWithChildren, useRef } from 'react'

import s from './crop-menu.module.scss'

import { useDisclose } from '@/app'
import { IconType, CropMenuIcon, useOutsideClickHandler } from '@/components'

type CropMenuProps = PropsWithChildren<{
  icon: IconType
  isImage?: boolean
}>

export const CropMenu = ({ children, icon, isImage }: CropMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclose()
  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideClickHandler(containerRef, onClose)

  const color = isOpen ? 'var(--color-accent-500)' : 'currentColor'

  return (
    <div className={s.container} tabIndex={0} ref={containerRef}>
      <button onClick={onToggle} className={s.trigger}>
        <CropMenuIcon type={icon} color={color} />
      </button>

      {isOpen && <div className={isImage ? s.image : s.menu}>{children}</div>}
    </div>
  )
}
