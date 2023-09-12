import React, { CSSProperties, ReactNode } from 'react'

import { TagText, TextVariant } from '@/ui/typography/types'
import { Typography } from '@/ui/typography/typography'

type TextProps = {
  variant: TextVariant
  as: TagText
  children: ReactNode
  style?: CSSProperties | null
}

export const Text: React.FC<TextProps> = ({
  as = 'span',
  variant = 'regular-text-16',
  children,
  style,
}: TextProps): JSX.Element => {
  style = style || null

  return (
    <Typography style={style} as={as} variant={variant}>
      {children}
    </Typography>
  )
}
