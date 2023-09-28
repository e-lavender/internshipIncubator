import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetGoogleUser, GoogleUser } from '@/app/services/google/google.api.types'

export const googleApi = createApi({
  reducerPath: 'googleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com' }),
  endpoints: builder => ({
    getGoogle: builder.mutation<GoogleUser, GetGoogleUser>({
      query: args => ({
        method: 'POST',
        url: `/oauth2/v3/userinfo`,
        params: { access_token: args.access_token },
      }),
    }),
  }),
})

export const { useGetGoogleMutation } = googleApi
