import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import s from './styles.module.scss'

import { store } from '@/app/store/store'
import { SidebarMenuWithItems } from '@/modules'

const meta = {
  title: 'Navigation/SidebarMenuWithItems',
  component: SidebarMenuWithItems,
  decorators: [
    Story => (
      <div style={{ height: '100vh' }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SidebarMenuWithItems>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: s.story,
  },
}
