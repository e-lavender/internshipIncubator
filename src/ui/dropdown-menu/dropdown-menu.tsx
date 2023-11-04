import { PropsWithChildren } from 'react'

import { DropdownMenuContainer } from '@/ui/dropdown-menu/dropdown-menu-container'

export const DropdownMenu = ({ children }: PropsWithChildren) => {
  return <DropdownMenuContainer>{children}</DropdownMenuContainer>
}
