import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'

import { RootState } from '@/app'
import { authActions } from '@/app/services/auth/auth.slice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.freedomindz.site/',
  credentials: 'include',
  prepareHeaders: (headers, api) => {
    const token = (api.getState() as RootState).auth.accessToken

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const mutex = new Mutex()
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  // @ts-ignore
  if (result.meta.response.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            url: '/api/v1/auth/refresh-token',
          },
          api,
          extraOptions
        )

        if (refreshResult.meta?.response?.status === 200) {
          if (refreshResult?.data) {
            api.dispatch(
              authActions.setToken({
                data: refreshResult.data,
              })
            )
          }
          result = await baseQuery(args, api, extraOptions)
        } else {
          await baseQuery(
            {
              url: '/api/v1/auth/logout',
              method: 'POST',
            },
            api,
            extraOptions
          )
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['ME'],
  endpoints: () => ({}),
})
