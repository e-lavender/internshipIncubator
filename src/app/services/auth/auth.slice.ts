import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  accessToken: '',
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken
    },
  },
})

export const authReducer = slice.reducer
export const authActions = slice.actions
