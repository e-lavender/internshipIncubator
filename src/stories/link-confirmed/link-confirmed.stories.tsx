import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { LinkConfirmed } from '@/modules'

const meta = {
  title: 'Auth/LinkConfirmed',
  component: LinkConfirmed,
  tags: ['autodocs'],
  args: {},
  decorators: [
    Story => (
      <Provider store={store}>
        <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof LinkConfirmed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
