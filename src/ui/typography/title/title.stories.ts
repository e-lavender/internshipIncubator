import type { StoryObj } from '@storybook/react'

import { Title } from '@/ui/typography/title/title'

const meta = {
  title: 'Components/Typography/Title',
  component: Title,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children:
      'H1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    as: 'h1',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children:
      'H2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    as: 'h2',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children:
      'H3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    as: 'h3',
    variant: 'h3',
  },
}
export const Large: Story = {
  args: {
    children:
      'Large Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate.',
    as: 'span',
    variant: 'large',
  },
}
