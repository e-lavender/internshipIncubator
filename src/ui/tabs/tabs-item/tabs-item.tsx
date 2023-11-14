import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsItemProps = {
  value: string
  asChild?: boolean
  disabled?: boolean
}
export const TabsItem = ({ children, ...props }: PropsWithChildren<TabsItemProps>) => {
  return <Tabs.Trigger {...props}>{children}</Tabs.Trigger>
}
