import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const locationApi = createApi({
  reducerPath: 'locationApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://countryinfoapi.com/',
    // prepareHeaders: (headers, api) => {
    //   headers.set('X-CSCAPI-KEY', 'API_KEY')
    //
    //   return headers
    // },
  }),
  endpoints: builder => ({
    getAllCountries: builder.query<any, void>({
      query: () => ({
        method: 'GET',
        url: `/api/countries`,
      }),
    }),
  }),
})

export const { useGetAllCountriesQuery } = locationApi
