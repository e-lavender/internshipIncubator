import { Meta, StoryObj } from '@storybook/react'

import { NewPasswordForm } from '@/components/create-new-password'

const meta = {
  title: 'Components/NewPasswordForm',
  component: NewPasswordForm,
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
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
