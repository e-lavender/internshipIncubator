import { PropsWithChildren } from 'react'

import { HeaderLayout } from '@/templates/layouts/header-layout'
import { SideMenuWithItems } from '@/ui/side-menu'

export const MenuLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HeaderLayout />
      <div style={{ paddingLeft: '22rem' }}>
        <SideMenuWithItems />
        <div>{children}</div>
      </div>
    </>
  )
}
