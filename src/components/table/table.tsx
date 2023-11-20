import { clsx } from 'clsx'

import s from './table.module.scss'

import { ArrowDownIcon } from '@/app'
import {
  BodyProps,
  DataCellProps,
  HeadCellProps,
  HeadProps,
  RowProps,
  TableProps,
} from '@/components/table/tabel-types'
import { Typography } from '@/ui'

const Root = (props: TableProps) => {
  const style = clsx(s.table, props.className)

  return <table className={style} {...props} />
}
const HeadCell = ({
  sortable,
  onClick,
  sort,
  columnKey,
  title,
  className,
  ...props
}: HeadCellProps) => {
  const style = {
    th: clsx(s.headCell, !sortable && s.noSort, className),
    title: clsx(s.title),
    icon: clsx(s.sortDscIcon, sort?.direction === 'asc' && s.sortAscIcon),
  }
  const showSortIcon = sort?.columnKey === columnKey && sort?.direction

  const handleClick = () => {
    if (onClick && columnKey) {
      onClick(columnKey)
    }
  }

  return (
    <th className={style.th} {...props} onClick={handleClick}>
      <div className={style.title}>
        <Typography variant={'regular-14'}>{title}</Typography>
        <div className={style.icon}>{showSortIcon && <ArrowDownIcon />}</div>
      </div>
    </th>
  )
}
const Head = ({ columns, sort, onSort, className, ...rest }: HeadProps) => {
  const handlerSort = (key: string, sortable?: boolean) => {
    if (!onSort || !sortable) return

    if (key !== sort?.columnKey) {
      return onSort({ columnKey: key, direction: 'asc' })
    }
    if (sort.direction === 'asc') {
      return onSort({ columnKey: key, direction: 'desc' })
    }

    onSort(null)
  }
  const styles = { head: clsx(s.head, className) }

  return (
    <thead className={styles.head} {...rest}>
      {columns.map(col => {
        const handler = () => {
          handlerSort(col.key, col.sortable)
        }

        return (
          <HeadCell
            sort={sort}
            title={col.title}
            onClick={handler}
            key={col.key}
            columnKey={col.key}
            sortable={col.sortable}
          />
        )
      })}
    </thead>
  )
}

const Body = (props: BodyProps) => {
  return <tbody {...props} />
}

const Row = (props: RowProps) => {
  return <tr {...props} />
}

const DataCell = ({ children, content, className, ...props }: DataCellProps) => {
  const style = clsx(s.dataCell, className)

  return (
    <td className={style} {...props}>
      {children}
    </td>
  )
}

export const Table = { Head, DataCell, HeadCell, Row, Body, Root }
