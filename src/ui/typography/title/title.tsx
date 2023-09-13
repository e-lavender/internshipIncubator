import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyProps } from '@/ui/typography/types'
import { Typography } from '@/ui/typography/typography'

export const Title = <T extends ElementType>({
  variant,
  as,
  children,
  className = null,
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>): JSX.Element => {
  variant = variant || 'h1'
  as = as || (variant !== 'large' ? as : 'span')
  className = className || null

  return (
    <Typography className={className} as={as} variant={variant}>
      {children}
    </Typography>
  )
}
