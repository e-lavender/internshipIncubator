import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'
import { HYDRATE } from 'next-redux-wrapper'

import { authApiUrls } from '@/app/constants'
import { getFromSessionStorage, setToSessionStorage } from '@/app/utils'

const { signOut, refreshMe } = authApiUrls

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_API_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    if (typeof window !== 'undefined') {
      const token = getFromSessionStorage('accessToken', null)

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
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

  if (result?.meta?.response?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            url: refreshMe(),
          },
          api,
          extraOptions
        )

        if (refreshResult.meta?.response?.status === 200) {
          result = await baseQuery(args, api, extraOptions)
        } else {
          await baseQuery(
            {
              url: signOut(),
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
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-prototype-builtins
    if ((result?.data as { accessToken?: string })?.hasOwnProperty('accessToken')) {
      setToSessionStorage('accessToken', (result.data as { accessToken: string }).accessToken)
    }
    if (result?.meta?.request.url === process.env.BASE_API_URL + signOut()) {
      sessionStorage.removeItem('accessToken')
    }
  }

  return result
}

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['ME', 'Profile', 'Posts'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({}),
})

export const {
  util: { getRunningQueriesThunk },
} = commonApi
