import React, { memo } from 'react'

import { TypographyProps } from '@/ui/typography/types'
import s from '@/ui/typography/typography.module.scss'

const Component: React.FC<TypographyProps> = ({
  variant,
  as: Component = 'span',
  children,
}): JSX.Element => {
  return <Component className={s[variant]}>{children}</Component>
}

export const Typography = memo(Component)
