import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react'

import * as LabelRDX from '@radix-ui/react-label'

import { Typography } from '../typography/typography'

type LabelProps = {
  id?: string
  title?: string
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ id, title, children }) => (
  <>
    <LabelRDX.Root htmlFor={id}>
      {title && <Typography>{title}</Typography>}

      {children}
    </LabelRDX.Root>
  </>
)
