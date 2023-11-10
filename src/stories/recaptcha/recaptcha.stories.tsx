import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { RECAPTCHA, RecaptchaProps } from '@/ui'

const meta = {
  title: 'Components/Recaptcha',
  component: RECAPTCHA,
  tags: ['autodocs'],
  args: {
    sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY as string,
    hl: 'en',
    theme: 'dark',
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof RECAPTCHA>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

const RecaptchaWithHookAndError = ({
  onChange,
  error = 'Please verify that you are not a robot',
  ...rest
}: RecaptchaProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div style={{ border: isChecked ? '1px solid transparent' : '1px solid red', padding: '5px' }}>
      <RECAPTCHA theme={'dark'} onChange={() => setIsChecked(prev => !prev)} {...rest} />
      <p style={{ color: 'red', marginTop: 7, opacity: isChecked ? 0 : 1 }}>{error}</p>
    </div>
  )
}

export const WithError: Story = {
  render: () => (
    <RecaptchaWithHookAndError sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!} hl={'en'} />
  ),
}
