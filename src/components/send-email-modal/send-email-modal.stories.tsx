import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { SendEmailModal } from '@/components'

const meta: Meta<typeof SendEmailModal> = {
  title: 'Components/SendEmailModal',
  component: SendEmailModal,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof SendEmailModal>

export const Modal: Story = {
  args: {},
}
