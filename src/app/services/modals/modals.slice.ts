import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { COMMON_MODE_STATE } from '@/app/constants/enums'
import {
  CreatePostModal,
  ModalsStateModel,
  PostCardViewModelMode,
} from '@/app/services/modals/modals.types'
import { PostImageViewModel, PostViewModel } from '@/app/services/public-posts/public-posts.types'

const defaultState: ModalsStateModel = {
  createPostModal: {
    isOpen: false,
  },
  postCardModal: {
    isOpen: false,
    post: { images: [] as PostImageViewModel[], description: '' } as PostViewModel,
    mode: COMMON_MODE_STATE.VIEW,
  },
}

const post = createSlice({
  name: 'modals',
  initialState: defaultState,
  reducers: {
    setCreatePostModal: (state, action: PayloadAction<CreatePostModal>) => {
      state.createPostModal = action.payload
    },
    setPostCardModalIsOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.postCardModal.isOpen = action.payload.isOpen
    },
    setPostCardModalPost: (state, action: PayloadAction<{ post: PostViewModel }>) => {
      state.postCardModal.post = action.payload.post
    },
    setPostCardModalMode: (state, action: PayloadAction<{ mode: PostCardViewModelMode }>) => {
      state.postCardModal.mode = action.payload.mode
    },
    clearPostCardModalState: state => {
      state.postCardModal = defaultState.postCardModal
    },
    setPostCardModalDescription: (state, action: PayloadAction<{ description: string }>) => {
      state.postCardModal.post.description = action.payload.description
    },
  },
})

export const {
  setCreatePostModal,
  setPostCardModalIsOpen,
  setPostCardModalPost,
  setPostCardModalMode,
  clearPostCardModalState,
  setPostCardModalDescription,
} = post.actions
export const modalsReducer = post.reducer
