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
    placeholder: 'Placeholder',
    disabled: false,
    value: 'Input value',
  },
}

export const Text: Story = {
  args: { disabled: false, title: 'Title', inputType: 'text' },
}

export const Password: Story = {
  args: { disabled: false, title: 'Title', inputType: 'password' },
}

export const Search: Story = {
  args: { disabled: false, title: 'Title', inputType: 'search' },
}
