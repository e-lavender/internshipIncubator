import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/ui/text-field'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    title: 'Title',
    inputType: 'text',
    error: 'Error',
    placeholder: 'Placeholder',
    disabled: true,
  },
}

export const Disabled: Story = {
  args: { disabled: true, title: 'test', inputType: 'text' },
}
