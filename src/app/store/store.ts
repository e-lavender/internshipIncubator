import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authReducer } from '@/app/services/auth/auth.slice'
import { commonApi } from '@/app/services/common/common.api'
import { locationApi } from '@/app/services/countries/countries.api'
import { googleApi } from '@/app/services/google/google.api'
import { settingsSlice } from '@/app/services/settings'

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    auth: authReducer,
    settings: settingsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      commonApi.middleware,
      googleApi.middleware,
      locationApi.middleware
    ),
})

setupListeners(store.dispatch)
