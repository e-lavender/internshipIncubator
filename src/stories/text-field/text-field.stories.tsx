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
    label: 'Title',
    inputType: 'text',
    placeholder: 'Placeholder',
    disabled: false,
    value: 'Input value',
  },
}

export const Text: Story = {
  args: { disabled: false, label: 'Title', inputType: 'text', placeholder: 'Placeholder' },
}

export const Password: Story = {
  args: { disabled: false, label: 'Title', inputType: 'password', placeholder: 'Placeholder' },
}

export const Search: Story = {
  args: { disabled: false, label: 'Title', inputType: 'search', placeholder: 'Placeholder' },
}
