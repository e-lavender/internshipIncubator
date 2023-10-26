import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import { clsx } from 'clsx'
import Link from 'next/link'

import s from './menu-item.module.scss'

import { SVGIconType } from '@/app/assets/svg/menu-icons/model'
import { Typography } from '@/ui'

type MenuItemProps<T extends ElementType = typeof Link> = {
  as?: T
  label?: string
  icon?: SVGIconType
  className?: string
  disabled?: boolean
  isSelected?: boolean
} & ComponentPropsWithoutRef<T>

export const MenuItem = <T extends ElementType = typeof Link>({
  as,
  href,
  icon,
  label,
  disabled,
  isSelected,
  ...props
}: MenuItemProps<T> & Omit<MenuItemProps<T>, keyof MenuItemProps<T>>) => {
  const SVGMenuIcon = icon || Fragment
  const Component = as || Link

  const styles = {
    link: clsx(s.link, disabled && s.disabled, isSelected && s.selected),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <li>
      <Component
        href={href}
        className={styles.link}
        aria-disabled={disabled}
        aria-hidden={disabled}
        {...props}
      >
        <SVGMenuIcon />
        <Typography className={styles.label}>{label}</Typography>
      </Component>
    </li>
  )
}
