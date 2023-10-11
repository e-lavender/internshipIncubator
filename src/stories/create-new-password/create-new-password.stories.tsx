import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { NewPasswordForm } from '@/components/create-new-password'

const meta = {
  title: 'Pages/NewPasswordForm',
  component: NewPasswordForm,
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
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
