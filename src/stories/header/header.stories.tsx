import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { Header } from '@/modules'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {},
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authenticated: Story = {
  args: {
    isAuthed: true,
  },
}

export const NonAuthenticated: Story = {
  args: {
    isAuthed: false,
  },
}
