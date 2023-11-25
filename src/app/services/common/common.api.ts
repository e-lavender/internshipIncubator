import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'

import { authActions } from '@/app/services/auth/auth.slice'
import { RootState } from '@/app/store/store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.freedomindz.site/api',
  credentials: 'include',
  prepareHeaders: (headers, api) => {
    const token = (api.getState() as RootState).auth.accessToken

    if (token) {
      headers.set('authorization', `${token}`)
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

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            url: '/api/auth/new-tokens',
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
              url: '/api/auth/logout',
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
