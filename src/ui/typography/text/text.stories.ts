import type { StoryObj } from '@storybook/react'

import { Text } from '@/ui/typography/text/text'

const meta = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Regular_text_16: Story = {
  args: {
    children:
      'Regular text 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    as: 'p',
    variant: 'regular-text-16',
  },
}
export const Regular_text_14: Story = {
  args: {
    children:
      'Regular text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'regular-text-14',
    as: 'p',
  },
}
export const Bold_text_16: Story = {
  args: {
    children:
      'Bold text 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'bold-text-16',
    as: 'p',
  },
}

export const Medium_text_14: Story = {
  args: {
    children:
      'Medium text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'medium-text-14',
    as: 'p',
  },
}
export const Bold_text_14: Story = {
  args: {
    children:
      'Bold text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'bold-text-14',
    as: 'p',
  },
}

export const Small_text: Story = {
  args: {
    children:
      'Small text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'small-text',
    as: 'p',
  },
}

export const Semi_bold_small_text: Story = {
  args: {
    children:
      'Semi bold small text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'semi-bold-small-text',
    as: 'p',
  },
}
