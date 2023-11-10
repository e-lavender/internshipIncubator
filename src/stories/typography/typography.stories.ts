import type { StoryObj } from '@storybook/react'

import { Typography } from '@/ui/typography/typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

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

export const Regular_text_16: Story = {
  args: {
    children:
      'Regular text 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    as: 'p',
    variant: 'regular-16',
  },
}
export const Bold_text_16: Story = {
  args: {
    children:
      'Bold text 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'bold-16',
    as: 'p',
  },
}
export const Regular_text_14: Story = {
  args: {
    children:
      'Regular text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'regular-14',
    as: 'p',
  },
}

export const Medium_text_14: Story = {
  args: {
    children:
      'Medium text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'medium-14',
    as: 'p',
  },
}
export const Bold_text_14: Story = {
  args: {
    children:
      'Bold text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'bold-14',
    as: 'p',
  },
}

export const Small_text: Story = {
  args: {
    children:
      'Small text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'small',
    as: 'p',
  },
}

export const Semi_bold_small: Story = {
  args: {
    children:
      'Semi bold small text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'semi-bold-small',
    as: 'p',
  },
}

export const Regular_link: Story = {
  args: {
    children: 'regular-link',
    variant: 'regular-link',
    as: 'span',
  },
}

export const Small_link: Story = {
  args: {
    children: 'small-link',
    variant: 'small-link',
    as: 'span',
  },
}
