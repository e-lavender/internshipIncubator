import React, { ReactNode } from 'react'

import { TitleVariant } from '@/ui/typography/types'
import { Typography } from '@/ui/typography/typography'

type TitleProps = {
  variant?: TitleVariant
  children: ReactNode
}

export const Title: React.FC<TitleProps> = ({ children, variant = 'h1' }): JSX.Element => {
  let as

  variant = variant || 'h1'
  variant !== 'large' ? (as = variant) : (as = 'span')

  return (
    <Typography as={as} variant={variant}>
      {children}
    </Typography>
  )
}
