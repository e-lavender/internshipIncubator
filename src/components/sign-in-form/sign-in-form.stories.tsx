import { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components/sign-in-form/index'

const meta = {
  title: 'Components/SignInForm',
  component: SignIn,
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
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
