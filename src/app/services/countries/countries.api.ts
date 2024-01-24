import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import {
  CitiesOfCountry,
  TransformedCitiesData,
} from '@/app/services/countries/countries.api.types'

export const locationApi = createApi({
  reducerPath: 'locationApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://countriesnow.space',
    // prepareHeaders: (headers, api) => {
    //   headers.set('X-CSCAPI-KEY', 'API_KEY')
    //
    //   return headers
    // },
  }),
  endpoints: builder => ({
    getCities: builder.mutation<TransformedCitiesData[], { country: string }>({
      query: country => ({
        method: 'POST',
        url: `/api/v0.1/countries/cities`,
        body: country,
      }),
      transformResponse: (response: CitiesOfCountry): TransformedCitiesData[] =>
        response?.data?.map(city => ({ value: city.toLowerCase(), label: city })),
    }),
  }),
})

export const { useGetCitiesMutation } = locationApi
