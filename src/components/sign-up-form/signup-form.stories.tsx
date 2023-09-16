import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from '@/components'

const meta = {
  title: 'Components/SignUpForm',
  component: SignUpForm,
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
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
