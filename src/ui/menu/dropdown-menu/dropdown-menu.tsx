import { PropsWithChildren } from 'react'

import { DropdownMenuContainer, MenuProps } from '@/ui'

export const DropdownMenu = ({ menuStyle, children }: PropsWithChildren<MenuProps>) => {
  return <DropdownMenuContainer menuStyle={menuStyle}>{children}</DropdownMenuContainer>
}
