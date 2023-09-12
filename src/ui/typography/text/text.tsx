import React, { ReactNode } from 'react'

import { TagText, TextVariant } from '@/ui/typography/types'
import { Typography } from '@/ui/typography/typography'

type TextProps = {
  variant: TextVariant
  as: TagText
  children: ReactNode
}

export const Text: React.FC<TextProps> = ({
  as = 'regular-text-16',
  variant = 'span',
  children,
}: TextProps) => {
  return (
    <Typography as={as} variant={variant}>
      {children}
    </Typography>
  )
}
