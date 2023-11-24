import type { Meta, StoryObj } from '@storybook/react'

import { AccountImagePicker } from '@/modules'

const meta = {
  title: 'Modules/AccountImagePicker',
  component: AccountImagePicker,
  args: {},
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AccountImagePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
