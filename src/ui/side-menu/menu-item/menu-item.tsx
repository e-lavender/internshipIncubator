import { clsx } from 'clsx'
import Link, { LinkProps } from 'next/link'

import s from './menu-item.module.scss'

import { SVGIconType } from '@/app/assets/svg/menu-icons/model'
import { Button, Typography } from '@/ui'

type MenuItemProps = {
  label?: string
  icon: SVGIconType
  className?: string
  disabled?: boolean
  isSelected?: boolean
} & LinkProps

export const MenuItem = ({ href, icon, label, disabled, isSelected, ...props }: MenuItemProps) => {
  const SVGMenuIcon = icon

  const styles = {
    link: clsx(s.link, disabled && s.disabled, isSelected && s.selected),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <li>
      <Link
        href={href}
        className={styles.link}
        aria-disabled={disabled}
        aria-hidden={disabled}
        {...props}
      >
        <SVGMenuIcon />
        <Typography className={styles.label}>{label}</Typography>
      </Link>
    </li>
  )
}
