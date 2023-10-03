import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { authAPI } from '@/app/services/auth/auth.api'

const initialState = {
  accessToken: '',
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ data: any }>) => {
      state.accessToken = action.payload.data.accessToken
    },
  },
  extraReducers: builder => {
    builder.addMatcher(authAPI.endpoints.signIn.matchFulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken
    })
  },
})

export const authReducer = slice.reducer
export const authActions = slice.actions
