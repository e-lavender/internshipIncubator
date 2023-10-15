import { Meta, StoryObj } from '@storybook/react'

import { NotificationsBell } from '@/components'

const meta = {
  title: 'Components/NotificationsBell',
  component: NotificationsBell,
  tags: ['autodocs'],
  args: {},
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof NotificationsBell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
