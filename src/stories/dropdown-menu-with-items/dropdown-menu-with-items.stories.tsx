import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuWithItems } from '@/modules'

const meta = {
  title: 'Navigation/DropdownMenuWithItems',
  component: DropdownMenuWithItems,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center', height: '25rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownMenuWithItems>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
