import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CreatePostModal, ModalsStateModel } from '@/app/services/modals/modals.types'

const defaultState: ModalsStateModel = {
  createPostModal: {
    isOpen: false,
  },
}

const post = createSlice({
  name: 'modals',
  initialState: defaultState,
  reducers: {
    setCreatePostModal: (state, action: PayloadAction<CreatePostModal>) => {
      state.createPostModal = action.payload
    },
  },
})

export const { setCreatePostModal } = post.actions
export const modalsReducer = post.reducer
