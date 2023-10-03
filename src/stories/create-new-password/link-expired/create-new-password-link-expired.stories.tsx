import { Meta, StoryObj } from '@storybook/react'

import { NewPasswordLinkExpired } from '@/components/create-new-password'

const meta = {
  title: 'Components/NewPasswordLinkExpired',
  component: NewPasswordLinkExpired,
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
} satisfies Meta<typeof NewPasswordLinkExpired>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
