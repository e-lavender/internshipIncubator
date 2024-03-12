import { useState } from 'react'

import { useMyPaymentsQuery } from '@/app/services/payments/payments.api'
import { PaymentsTable } from '@/components/payments-table/payments-table'
import { PAYMENTS_TABLE_COLUMNS } from '@/modules/user-payments/constants'
import { Pagination } from '@/ui/pagination'

export const UserPayments = () => {
  const [currenPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')
  const { data: myPayments } = useMyPaymentsQuery()
  const paginatedData = myPayments?.slice(
    currenPage * +pageSize,
    currenPage * +pageSize + +pageSize + 1
  )

  return (
    <>
      <PaymentsTable columns={PAYMENTS_TABLE_COLUMNS} data={paginatedData} />
      <Pagination
        currentPage={currenPage}
        totalCount={myPayments?.length || 0}
        pageSize={+pageSize}
        siblingCount={3}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </>
  )
}
