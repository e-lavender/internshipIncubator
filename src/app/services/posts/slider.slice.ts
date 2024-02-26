import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { IMAGE_SIZE } from '@/app/constants/enums'
import { ImageSlideType } from '@/app/services/posts/posts.types'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

const defaultState: ImageSlideType = {
  images: [],
  currentImageIndex: 0,
  description: '',
}

const postSlider = createSlice({
  name: 'postSlider',
  initialState: defaultState,
  reducers: {
    addImage(state, action: PayloadAction<{ url: string }>) {
      const newImage: PostImageViewModel = {
        url: action.payload.url,
        alt: 'image',
        uploadId: nanoid(),
        imageSize: IMAGE_SIZE.MEDIUM,
        width: 0,
        height: 0,
        filter: '',
        fileSize: 1,
      }

      state.images = [...state.images, newImage]
    },
    addMultipleImages(state, action: PayloadAction<PostImageViewModel[]>) {
      state.images = [...state.images, ...action.payload]
    },
    deleteImage(state, action: PayloadAction<{ id: string }>) {
      state.images = state.images.filter(image => image.uploadId !== action.payload.id)
    },
    addCroppedImage(state, action: PayloadAction<{ index: number; croppedImage: string }>) {
      const { index, croppedImage } = action.payload

      state.images[index] = { ...state.images[index], url: croppedImage }
    },
    setActiveImageFilter(state, action: PayloadAction<{ id: string | number; filter: string }>) {
      const { id, filter } = action.payload

      state.images = state.images.filter(image => {
        if (image.uploadId === id) {
          image.filter = filter
        }

        return image
      })
    },
    setCurrentImageIndex(state, action: PayloadAction<{ index: number }>) {
      state.currentImageIndex = action.payload.index
    },
    changeDescription(state, action: PayloadAction<{ text: string }>) {
      state.description = action.payload.text
    },
    resetImagesToDefaultState(state, action: PayloadAction) {
      state.images = defaultState.images
      state.currentImageIndex = 0
      state.description = defaultState.description
    },
  },
})

export const {
  addImage,
  addMultipleImages,
  deleteImage,
  resetImagesToDefaultState,
  addCroppedImage,
  setActiveImageFilter,
  setCurrentImageIndex,
  changeDescription,
} = postSlider.actions
export const postSliderSlice = postSlider.reducer
