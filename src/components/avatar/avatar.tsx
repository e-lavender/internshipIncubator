import { ComponentPropsWithoutRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

import { AccountIcon, useMatchMedia } from '@/app'
import { AVATAR_SIZE } from '@/app/constants/sizes/avatar'

export type AvatarPropsType = {
  width?: number
  height?: number
  rounded?: boolean
  delay?: number
  className?: string
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({
  rounded = true,
  src,
  alt = 'avatar image',
  delay = 0,
  className,
  ...props
}: AvatarPropsType) => {
  const { isMobile } = useMatchMedia()
  const defaultSize = { x: AVATAR_SIZE.set(isMobile), y: AVATAR_SIZE.set(isMobile) }

  const { height = defaultSize.y, width = defaultSize.x } = props
  const SVGSizeRatio = 4.25

  const styles = clsx(s.container, rounded && s.rounded, className)

  return (
    <RadixAvatar.Root className={styles}>
      <RadixAvatar.Image
        className={s.image}
        width={width}
        height={height}
        src={src}
        alt={alt}
        {...props}
      />

      <RadixAvatar.Fallback asChild delayMs={delay}>
        <div className={s.image} style={{ width, height }} role={'image'} aria-label={alt}>
          <AccountIcon />
        </div>
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
