import type { Meta, StoryObj } from '@storybook/react'
import { SidebarMenuWithItems } from '@/ui'

import s from './styles.module.scss'

const meta = {
  title: 'Navigation/SidebarMenuWithItems',
  component: SidebarMenuWithItems,
  // args: {
  //   className: s.story,
  // },
  decorators: [
    Story => (
      <div style={{ height: '100vh' }}>
        <Story />
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
