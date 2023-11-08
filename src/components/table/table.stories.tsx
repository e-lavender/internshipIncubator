import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Sort, Table } from './table'
import s from './table.module.scss'

import { Checkbox } from '@/ui'

export const Data = [
  {
    id: 1,
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: 2,
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: 3,
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: 4,
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: 5,
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
  {
    id: 6,
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: 7,
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: 8,
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: 9,
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: 10,
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
  {
    id: 11,
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: 12,
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: 13,
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: 14,
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: 15,
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
  {
    id: 16,
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: 17,
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: 18,
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: 19,
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: 20,
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
]

export const Columns = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'createdBy',
    title: 'Created by',
    sortable: true,
  },
  {
    key: 'actions',
    title: '',
    sortable: false,
  },
]
const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

const Container = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <>
      <Table.Head columns={Columns} sort={sort} onSort={setSort} />
    </>
  )
}

export default meta
type Story = StoryObj<typeof meta>
export const DefaultWithSort: Story = {
  args: {
    children: <Container />,
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(children)(?:\b|')/g,
    },
  },
}

export const Head_Cell: Story = {
  args: {
    children: <Table.HeadCell key={'name'} title={'Name'} />,
  },
}

export const Data_Cell: Story = {
  args: {
    children: <Table.DataCell>{'Name'}</Table.DataCell>,
  },
}
export const Data_Cell_WithReactNode: Story = {
  args: {
    children: <Table.DataCell className={s.row}>{<Checkbox labelTitle={'name'} />}</Table.DataCell>,
  },
}

export const Data_Cell_With_Actions: Story = {
  args: {
    children: <Table.DataCell className={s.row}></Table.DataCell>,
  },
}
