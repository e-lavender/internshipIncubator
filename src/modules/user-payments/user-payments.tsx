import { useState } from 'react'

import { PAYMENTS_DATA } from '@/components/payments-table/payment-table-data'
import { PaymentsTable } from '@/components/payments-table/payments-table'
import { PAYMENTS_TABLE_COLUMNS } from '@/modules/user-payments/constants'
import { Pagination } from '@/ui/pagination'
import { useMyPaymentsQuery } from '@/app/services/payments/payments.api'

export const UserPayments = () => {
  const [currenPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')
  const { data: myPayments } = useMyPaymentsQuery()
  console.log(myPayments)
  const paginatedData = myPayments?.slice(
    currenPage * +pageSize,
    currenPage * +pageSize + +pageSize + 1
  )

  return (
    <>
      <PaymentsTable columns={PAYMENTS_TABLE_COLUMNS} data={paginatedData} />
      <Pagination
        currentPage={currenPage}
        totalCount={myPayments?.length}
        pageSize={+pageSize}
        siblingCount={3}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </>
  )
}
