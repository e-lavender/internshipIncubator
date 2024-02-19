import { Meta, StoryObj } from '@storybook/react'

import { ImageSlider } from '@/components'

const meta = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  tags: ['autodocs'],
  args: { images: [] },
  parameters: {
    controls: {
      exclude: /(?:\b|')(images)(?:\b|')/g,
    },
  },
  argTypes: {
    aspectRatio: {
      options: ['1 / 1', '16 / 9', '5 / 4'],
      control: { type: 'radio' },
    },
    fitStyle: {
      options: ['contain', 'cover'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ImageSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { fitStyle: 'contain', aspectRatio: '1/1' },
}
