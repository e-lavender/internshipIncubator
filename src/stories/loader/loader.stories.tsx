import { Meta, StoryObj } from '@storybook/react'

import { Loader } from '@/ui'

const meta = {
  title: 'Components/Loader',
  component: Loader,
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
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
