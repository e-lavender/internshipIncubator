import type { Meta, StoryObj } from '@storybook/react'
import { SidebarItem } from '@/ui'
import { HomeMenuIcon, LogOutMenuIcon } from '@/app'

const meta = {
  title: 'Navigation/SidebarItem',
  component: SidebarItem,
  decorators: [
    Story => (
      <div
        style={{ margin: '3em', display: 'flex', justifyContent: 'center', listStyleType: 'none' }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SidebarItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '#',
    icon: HomeMenuIcon,
    label: 'Home',
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemSelected: Story = {
  args: {
    href: '#',
    icon: HomeMenuIcon,
    label: 'Home',
    isSelected: true,
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemDisabled: Story = {
  args: {
    href: '#',
    icon: HomeMenuIcon,
    label: 'Home',
    disabled: true,
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemOnlyLabel: Story = {
  args: {
    href: 'https://www.google.com',
    label: 'Google',
    target: '_blank',
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemAsButton: Story = {
  args: {
    as: 'button',
    onClick: () => console.log('Logged Out!'),
    icon: LogOutMenuIcon,
    label: 'Log Out',
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
