import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Default',
    fullWidth: false,
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Primary',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    children: 'Secondary',
  },
}
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
    children: 'Outlined',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    disabled: false,
    children: 'Link',
  },
}
