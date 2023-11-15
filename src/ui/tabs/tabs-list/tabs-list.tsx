import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs-list.module.scss'

type TabsListProps = {
  loop?: boolean
  className?: string
}
export const TabsList = ({ children, ...props }: PropsWithChildren<TabsListProps>) => {
  return (
    <Tabs.List className={s.list} {...props}>
      {children}
    </Tabs.List>
  )
}
