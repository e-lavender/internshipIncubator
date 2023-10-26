import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from '@/components'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
