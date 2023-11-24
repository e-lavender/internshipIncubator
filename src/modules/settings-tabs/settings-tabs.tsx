import { useRouter } from 'next/router'

import { menuNavigation } from '@/app'
import { TabsContainer, TabsItem, TabsList } from '@/ui'

export const SettingsTabs = () => {
  const { push } = useRouter()

  return (
    <TabsContainer defaultValue={menuNavigation.settings()} onValueChange={route => push(route)}>
      <TabsList fullWidth>
        <TabsItem value={menuNavigation.settings()}>General Information</TabsItem>
        <TabsItem value={menuNavigation.devices()}>Devices</TabsItem>
        <TabsItem value={menuNavigation.account()}>Account Management</TabsItem>
        <TabsItem value={menuNavigation.payments()}>My payments</TabsItem>
      </TabsList>
    </TabsContainer>
  )
}
