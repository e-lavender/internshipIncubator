import React, { useEffect, useRef, useState } from 'react'

// Define generic props for the infinite scroll component
interface InfiniteScrollProps<T> {
  errorIndicator?: (error: any) => JSX.Element
  loadingIndicator?: JSX.Element
  noMoreDataText?: JSX.Element
  queryArgs: any
  queryHook: (args: any) => {
    data?: T[]
    error?: any
    isError: boolean
    isFetching: boolean
    isLoading: boolean
    refetch: () => void
  }
  renderComponent: (data: T) => JSX.Element
}

export const InfiniteScrollComponent = <T extends any>({
  errorIndicator,
  loadingIndicator,
  noMoreDataText,
  queryArgs,
  queryHook,
  renderComponent,
}: InfiniteScrollProps<T>): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const loader = useRef(null)

  const { data, error, isError, isFetching, isLoading, refetch } = queryHook({ ...queryArgs, page })

  // IntersectionObserver to handle infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading && !isFetching && data?.length) {
          setPage(prevPage => prevPage + 1)
        }
      },
      { threshold: 1.0 }
    )

    if (loader.current) {
      observer.observe(loader.current)
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current)
      }
    }
  }, [isLoading, isFetching, data])

  return (
    <div>
      {data?.map(renderComponent)}
      {isError && errorIndicator && errorIndicator(error)}
      {isLoading || isFetching ? loadingIndicator : null}
      {!isLoading && !isFetching && data && data.length === 0 && noMoreDataText}
      <div ref={loader} />
    </div>
  )
}
