import { PropsWithChildren, useRef } from 'react'

import { clsx } from 'clsx'

import s from './dropdown-menu-container.module.scss'

import { useDisclose, useOnClickOutside } from '@/app'

export type MenuProps = PropsWithChildren<{
  menuStyle?: string
}>

export const DropdownMenuContainer = ({ menuStyle, children }: MenuProps) => {
  const { isOpen: isMenuOpen, onClose: closeMenu, onOpen: openMenu } = useDisclose()
  const menuRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(menuRef, closeMenu)

  const clickHandler = () => openMenu()

  const styles = {
    dot: clsx(s.dot, isMenuOpen && s.active),
    menu: clsx(s.list, isMenuOpen && s.fade),
    list: clsx(isMenuOpen && s.active, menuStyle),
  }

  return (
    <nav className={s.navigation}>
      <div className={s.dots} onClick={clickHandler}>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
      </div>

      <div ref={menuRef} className={styles.menu}>
        <ul className={styles.list}>{children}</ul>
      </div>
    </nav>
  )
}
