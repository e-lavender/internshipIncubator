import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyProps } from '@/ui/typography/types'
import { Typography } from '@/ui/typography/typography'

export const Text = <T extends ElementType>({
  variant,
  as,
  children,
  className = null,
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>): JSX.Element => {
  variant = variant || 'regular-14'
  as = as || 'span'
  className = className || null

  return (
    <Typography className={className} as={as} variant={variant}>
      {children}
    </Typography>
  )
}
