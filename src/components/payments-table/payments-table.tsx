import React from 'react'

import { PaymentDataType } from '@/components/payments-table/payment-table-data'
import { Table } from '@/ui/table'
import { TableHeaderModel } from '@/ui/table/tabel-types'

export const PaymentsTable = ({
  columns,
  data,
}: {
  columns: TableHeaderModel[]
  data: PaymentDataType[]
}) => {
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          {columns.map(column => {
            return <Table.HeadCell key={column.key}>{column.title}</Table.HeadCell>
          })}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(row => {
          return (
            <Table.Row key={row.id}>
              <Table.DataCell>{row.dateOfPayment}</Table.DataCell>
              <Table.DataCell>{row.endDateOfSubscription}</Table.DataCell>
              <Table.DataCell>{row.price}</Table.DataCell>
              <Table.DataCell>{row.subscriptionType}</Table.DataCell>
              <Table.DataCell>{row.paymentType}</Table.DataCell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}

// const HeadCell = ({
//                       sortable,
//                       onClick,
//                       sort,
//                       columnKey,
//                       title,
//                       className,
//                       ...props
//                   }: HeadCellProps) => {
//     const style = {
//         th: clsx(s.headCell, !sortable && s.noSort, className),
//         title: clsx(s.title),
//         icon: clsx(s.sortDscIcon, sort?.direction === 'asc' && s.sortAscIcon),
//     }
//     const showSortIcon = sort?.columnKey === columnKey && sort?.direction
//
//     const handleClick = () => {
//         if (onClick && columnKey) {
//             onClick(columnKey)
//         }
//     }
//
//     return (
//         <th className={style.th} {...props} onClick={handleClick}>
//             <div className={style.title}>
//                 <Typography variant={'regular-14'}>{title}</Typography>
//                 <div className={style.icon}>{showSortIcon && <ArrowDownIcon />}</div>
//             </div>
//         </th>
//     )
// }
// const Head = ({ columns, sort, onSort, className, ...rest }: HeadProps) => {
//     const handlerSort = (key: string, sortable?: boolean) => {
//         if (!onSort || !sortable) return
//
//         if (key !== sort?.columnKey) {
//             return onSort({ columnKey: key, direction: 'asc' })
//         }
//         if (sort.direction === 'asc') {
//             return onSort({ columnKey: key, direction: 'desc' })
//         }
//
//         onSort(null)
//     }
//     const styles = { head: clsx(s.head, className) }
//
//     return (
//         <thead className={styles.head} {...rest}>
//         {columns.map(col => {
//             const handler = () => {
//                 handlerSort(col.key, col.sortable)
//             }
//
//             return (
//                 <HeadCell
//                     sort={sort}
//                     title={col.title}
//                     onClick={handler}
//                     key={col.key}
//                     columnKey={col.key}
//                     sortable={col.sortable}
//                 />
//             )
//         })}
//         </thead>
//     )
// }
