import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/ui'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    labelTitle: 'Label Text',
    disabled: false,
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    labelTitle: '',
  },
}

export const WithLabel: Story = {
  args: {
    labelTitle: 'I consent',
  },
}

export const Disabled: Story = {
  args: {
    labelTitle: 'Diabled checkbox',
    disabled: true,
  },
}
