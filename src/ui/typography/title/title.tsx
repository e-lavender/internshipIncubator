import React, { CSSProperties, ReactNode } from 'react'

import { TitleVariant } from '@/ui/typography/types'
import { Typography } from '@/ui/typography/typography'

type TitleProps = {
  variant?: TitleVariant
  children: ReactNode
  style?: CSSProperties | null
}

export const Title: React.FC<TitleProps> = ({ children, variant = 'h1', style }): JSX.Element => {
  let as

  style = style || null
  variant = variant || 'h1'
  variant !== 'large' ? (as = variant) : (as = 'span')

  return (
    <Typography style={style} as={as} variant={variant}>
      {children}
    </Typography>
  )
}
