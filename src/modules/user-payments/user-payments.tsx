import { useState } from 'react'

import { PAYMENTS_DATA } from '@/components/payments-table/payment-table-data'
import { PaymentsTable } from '@/components/payments-table/payments-table'
import { Pagination } from '@/ui/pagination'
import { TableHeaderModel } from '@/ui/table/tabel-types'

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

export const UserPayments = () => {
  const [currenPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')

  const paginatedData = PAYMENTS_DATA.slice(
    currenPage * +pageSize,
    currenPage * +pageSize + +pageSize + 1
  )

  return (
    <>
      <PaymentsTable columns={PAYMENTS_TABLE_COLUMNS} data={paginatedData} />
      <Pagination
        currentPage={currenPage}
        totalCount={PAYMENTS_DATA.length}
        pageSize={+pageSize}
        siblingCount={3}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </>
  )
}
