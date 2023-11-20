import { ReactElement } from 'react'

import { Table } from '@/components/table'
import { TableHeaderModel } from '@/components/table/tabel-types'
import { ProfileSettingLayout } from '@/templates'

const PAYMENTS_TABLE_COLUMNS: TableHeaderModel[] = [
  {
    key: 'dateOfPayment',
    title: 'Date of Payment',
    sortable: false,
  },
  {
    key: 'endDateOfSub',
    title: 'End date of subscription',
    sortable: false,
  },
  {
    key: 'price',
    title: 'Price',
    sortable: false,
  },
  {
    key: 'subscriptionType',
    title: 'Subscription Type',
    sortable: false,
  },
  {
    key: 'paymentType',
    title: 'Payment Type',
    sortable: false,
  },
]

const Payments = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Payments</h1>

      <Table.Root>
        <Table.Head columns={PAYMENTS_TABLE_COLUMNS}></Table.Head>
      </Table.Root>
    </>
  )
}

Payments.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default Payments
