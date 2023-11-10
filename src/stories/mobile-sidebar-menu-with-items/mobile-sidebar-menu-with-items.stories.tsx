import type { Meta, StoryObj } from '@storybook/react'

import s from './styles.module.scss'

import { MobileSidebarMenuWithItems } from '@/modules'

const meta = {
  title: 'Navigation/MobileSidebarMenuWithItems',
  component: MobileSidebarMenuWithItems,
  args: {
    className: s.story,
  },
  decorators: [
    Story => (
      <div style={{ height: '20rem', width: '40rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MobileSidebarMenuWithItems>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: s.story,
  },
}
