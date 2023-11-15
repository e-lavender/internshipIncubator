import { useRouter } from 'next/router'

import { TabsContainer, TabsContent, TabsItem, TabsList } from '@/ui'

export const SettingsTabs = () => {
  const { push } = useRouter()

  return (
    <TabsContainer defaultValue={'tab2'}>
      <TabsList>
        <TabsItem value={'tab1'} disabled>
          General Information
        </TabsItem>
        <TabsItem value={'tab2'}>Devices</TabsItem>
        <TabsItem value={'tab3'}>Account Management</TabsItem>
        <TabsItem value={'tab4'}>My payments</TabsItem>
      </TabsList>
      <TabsContent value={'tab1'}>Content Block 1</TabsContent>
      <TabsContent value={'tab2'}>Content Block 2</TabsContent>
      <TabsContent value={'tab3'}>Content Block 3</TabsContent>
      <TabsContent value={'tab4'}>Content Block 4</TabsContent>
    </TabsContainer>
  )
}
