import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import * as LabelRDX from '@radix-ui/react-label'

import { Typography } from '../typography/typography'

type LabelProps = {
  asChild?: boolean
  id?: any
  labelTitle?: string
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<PropsWithChildren<LabelProps>> = ({ id, labelTitle, children }) => (
  <>
    <LabelRDX.Root className="LabelRoot" htmlFor={id}>
      <Typography variant="regular-16">{labelTitle}</Typography>
      {children}
    </LabelRDX.Root>
  </>
)
