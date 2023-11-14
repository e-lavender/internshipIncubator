import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsListProps = {
  loop?: boolean
  className?: string
}
export const TabsList = ({ children, ...props }: PropsWithChildren<TabsListProps>) => {
  return <Tabs.List {...props}>{children}</Tabs.List>
}
