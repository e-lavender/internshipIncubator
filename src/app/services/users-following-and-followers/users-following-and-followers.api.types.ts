export type GetUsersParameters = {
  cursor: number
  pageNumber: number
  pageSize: number
  search: string
}

export type GetUsersResponse = {
  items: GetUsersResponseItems[]
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}
export type GetUsersResponseItems = {
  avatars: any[]
  createdAt: string
  firstName?: any
  id: number
  lastName?: any
  userName: string
}
