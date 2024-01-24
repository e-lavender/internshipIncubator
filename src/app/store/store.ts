import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authReducer } from '@/app/services/auth/auth.slice'
import { commonApi } from '@/app/services/common/common.api'
import { locationApi } from '@/app/services/countries/countries.api'
import { googleApi } from '@/app/services/google/google.api'
import { modalsReducer } from '@/app/services/modals/modals.slice'
import { postSlice } from '@/app/services/post/post.slice'
import { postSliderSlice } from '@/app/services/post/slider.slice'
import { profileSlice } from '@/app/services/profile/profile.slice'

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    auth: authReducer,
    profile: profileSlice,
    post: postSlice,
    slider: postSliderSlice,
    modals: modalsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      commonApi.middleware,
      googleApi.middleware,
      locationApi.middleware
    ),
})

setupListeners(store.dispatch)
