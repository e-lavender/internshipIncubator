import { PropsWithChildren } from 'react'

import { HeaderLayout } from '@/templates/layouts/header-layout'
import { SidebarMenuLayout } from '@/templates/layouts/sidebar-menu-layout'

type Props = PropsWithChildren
export const WithHomePageLayout = ({ children }: PropsWithChildren) => {
  /*
   isAuthed is imitation of authorization state/flow just to see how app will behave in different scenarios.
   For the same reason in styles was added min-height of 200vh just to see what are potential problems are and how layouts will respond to that.
   And almost immediately problem occur. While choosing your preferred language, focus goes from children area to select area
   and as the result you can see resize effect of window and scrollbar is resizing and jumping.
  */

  const isAuthed = true

  return <SidebarMenuLayout isAuthed={isAuthed}>{children}</SidebarMenuLayout>
}
