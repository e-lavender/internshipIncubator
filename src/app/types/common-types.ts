import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'

export type MessageArrayModel = {
  message: string
  field: string
}[]
export type ErrorWithData =
  | (FetchBaseQueryError & {
      data: {
        message?: MessageArrayModel | string
        errorsMessages?: MessageArrayModel
      }
    })
  | string
export type Nullable<T> = T | null
export type ErrorModel = {
  status: string
  data: { statusCode: number; messages: ErrorModelMessages[]; error: string }
}
export type ErrorModelMessages = {
  message: string
  field: string
}
