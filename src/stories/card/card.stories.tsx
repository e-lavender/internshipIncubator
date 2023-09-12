import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/ui/card'

const meta = {
  title: 'Components/Card',
  component: Card,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: /(?:\b|')(children|onClick)(?:\b|')/g,
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <h1 style={{ color: 'var(--text-color-primary)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
    ),
  },
}
export const With_Padding: Story = {
  args: {
    children: (
      <h1 style={{ color: 'var(--text-color-primary)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
    ),
    style: { padding: '25px' },
  },
}
