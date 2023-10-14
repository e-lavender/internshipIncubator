import { Meta, StoryObj } from '@storybook/react'

import { NewPasswordConfirmationRedirection } from '@/modules/create-new-password-form'

const meta = {
  title: 'Pages/NewPasswordConfirmation',
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
