import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import { clsx } from 'clsx'
import Link from 'next/link'

import s from './dropdown-menu-item.module.scss'

import { SVGIconType } from '@/app/assets/svg/menu-icons/model'
import { Typography } from '@/ui'

type MenuItemProps<T extends ElementType = typeof Link> = {
  as?: T
  label?: string
  icon?: SVGIconType
  className?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<T>

export const DropdownMenuItem = <T extends ElementType = typeof Link>({
  as,
  href,
  icon,
  label,
  disabled,
  children,
  ...props
}: MenuItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof MenuItemProps<T>>) => {
  const SVGMenuIcon = icon || Fragment
  const Component = as || Link

  const styles = {
    link: clsx(s.link, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <li>
      <Component href={href} className={styles.link} {...props}>
        {children}
        <SVGMenuIcon />
        <Typography className={styles.label}>{label}</Typography>
      </Component>
    </li>
  )
}
