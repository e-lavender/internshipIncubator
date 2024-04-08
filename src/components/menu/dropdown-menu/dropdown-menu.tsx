import { PropsWithChildren } from 'react'

import { DropdownMenuContainer, MenuProps } from '@/components'

export const DropdownMenu = ({ children, ...restProps }: PropsWithChildren<MenuProps>) => {
  return <DropdownMenuContainer {...restProps}>{children}</DropdownMenuContainer>
}
