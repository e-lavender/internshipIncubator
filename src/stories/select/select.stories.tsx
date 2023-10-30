import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Select } from '@/ui/select/select'
import { SelectModel } from '@/ui/select/select-types'

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

const optionsPrimary = [
  {
    value: 'Apple',
    label: 'Apple',
  },
  {
    value: 'Banana',
    label: 'Banana',
  },
  {
    value: 'Blueberry',
    label: 'Blueberry',
  },
  {
    value: 'Grapes',
    label: 'Grapes',
  },
]
const optionsPagination = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '100',
    label: '100',
  },
]

export const Simple = {
  render: (args: SelectModel) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return (
      <div style={{ display: 'flex', columnGap: '20px' }}>
        <Select {...args} onChange={setValue} />
      </div>
    )
  },

  args: {
    options: optionsPrimary,
  },
}

export const SimpleWithLabel = {
  render: (args: SelectModel) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return (
      <div>
        <Select {...args} onChange={setValue} />
      </div>
    )
  },

  args: {
    placeholder: 'select...',
    options: optionsPrimary,
    label: 'Select',
  },
}

export const Pagination = {
  render: (args: SelectModel) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return <Select {...args} onChange={setValue} />
  },

  args: {
    options: optionsPagination,
    label: 'pagination',
    variant: 'pagination',
    placeholder: '1',
  },
}

export const FullWidth = {
  render: (args: SelectModel) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    return <Select {...args} onChange={setValue} />
  },

  args: {
    options: optionsPrimary,
    variant: 'primary',
    width: '100%',
  },
}
