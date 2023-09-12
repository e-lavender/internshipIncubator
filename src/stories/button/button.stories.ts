import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/ui/button/index'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta
type Story = StoryObj<typeof Button>


export const Default: Story = {

    args: {
        variant: 'primary',
        disabled: false,
        name: 'primary',
        fullWidth:false
    },
}

export const Primary: Story = {
    args: {
        variant: 'primary',
        disabled: false,
        name:'primary',
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        disabled: false,
        name:'secondary',
    },
}
export const Outlined: Story = {
    args: {
        variant: 'outlined',
        disabled: false,
        name:'outlined',
    },
}
export const Link: Story = {
    args: {
        variant: 'link',
        disabled: false,
        name:'Link',
    },
}
