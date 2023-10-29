import { Meta, StoryObj } from '@storybook/react'

import { LanguageSelect } from '@/components'
import meta from '@/stories/link-expired/link-expired.stories'

export default {
  title: 'Components/Select',
  component: LanguageSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelect>

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
