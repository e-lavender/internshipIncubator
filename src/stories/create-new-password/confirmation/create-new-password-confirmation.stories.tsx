import { Meta, StoryObj } from '@storybook/react'

import { NewPasswordConfirmationRedirection } from '@/components/create-new-password'

const meta = {
  title: 'Components/NewPasswordConfirmation',
  component: NewPasswordConfirmationRedirection,
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
} satisfies Meta<typeof NewPasswordConfirmationRedirection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
