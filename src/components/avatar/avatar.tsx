import { ComponentPropsWithoutRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './avatar.module.scss'

import { useMatchMedia } from '@/app'
import { SIZES } from '@/app/constants/sizes/avatar'

type AvatarPropsType = {
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
  delay,
  className,
  ...props
}: AvatarPropsType) => {
  const { isMobile } = useMatchMedia()
  const defaultSize = { x: SIZES.SET_MODE(isMobile), y: SIZES.SET_MODE(isMobile) }

  const { height = defaultSize.y, width = defaultSize.x } = props

  const styles = {
    container: clsx(s.container, rounded && s.rounded, className),
    image: clsx(s.image, rounded && s.rounded),
  }

  return (
    <RadixAvatar.Root className={styles.container}>
      <RadixAvatar.Image
        className={s.image}
        width={width}
        height={height}
        src={src}
        alt={alt}
        {...props}
      />
      <RadixAvatar.Fallback asChild delayMs={delay}>
        <Image
          className={styles.image}
          width={width}
          height={height}
          src={'/assets/avatar/avatar-fallback.webp'}
          alt={alt}
        />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
