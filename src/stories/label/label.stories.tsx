import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '@/ui/label'

const meta = {
  title: 'Components/Label',
  component: Label,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Label Title',
  },
}
