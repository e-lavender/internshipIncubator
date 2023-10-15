import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { LinkExpired } from '@/components'

const meta = {
  title: 'Pages/LinkExpired',
  component: LinkExpired,
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
} satisfies Meta<typeof LinkExpired>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
