import type { Meta, StoryObj } from '@storybook/react'

import { NotificationModal } from './notification-modal'

const meta: Meta<typeof NotificationModal> = {
  title: 'Components/NotificationModal',
  component: NotificationModal,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof NotificationModal>

export const Modal: Story = {
  args: {},
}
