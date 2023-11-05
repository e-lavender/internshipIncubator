import { PropsWithChildren } from 'react'

import { DropdownMenuContainer } from '@/ui'

export const DropdownMenu = ({ children }: PropsWithChildren) => {
  return <DropdownMenuContainer>{children}</DropdownMenuContainer>
}
