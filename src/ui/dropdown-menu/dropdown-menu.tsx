import { PropsWithChildren, ReactElement, ReactNode } from 'react'

import { DropdownMenuContainer } from '@/ui/dropdown-menu/dropdown-menu-container'

type DropdownMenuProps = {
  className?: string
}

export const DropdownMenu = ({ children, className }: PropsWithChildren<DropdownMenuProps>) => {
  return <DropdownMenuContainer className={className}>{children}</DropdownMenuContainer>
}
