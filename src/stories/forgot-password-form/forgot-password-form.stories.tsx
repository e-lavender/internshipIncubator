import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/components'

const meta = {
  title: 'Components/ForgotPasswordForm',
  component: ForgotPasswordForm,
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
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
