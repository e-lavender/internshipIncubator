import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { sessionApiUrls } from '@/app/constants/routes/sessions'
import { IpGeolocationType } from '@/app/services/ipgeolocation/ipgeolocation.types'

const { ipGeolocationAPI } = sessionApiUrls

export const ipGeolocationApi = createApi({
  reducerPath: 'locationIpApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.ipgeolocation.io` }),
  endpoints: builder => ({
    getGeolocation: builder.query<IpGeolocationType, { apiKEY: string }>({
      query: args => ({
        method: 'GET',
        url: ipGeolocationAPI(args.apiKEY),
      }),
    }),
  }),
})

export const { useGetGeolocationQuery } = ipGeolocationApi
