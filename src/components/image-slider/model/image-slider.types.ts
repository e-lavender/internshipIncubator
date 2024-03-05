import { CSSProperties, Dispatch, SetStateAction } from 'react'

import { MockedImagesDataType } from '@/app/data/image-slider/image-slider-data'
import { UserModel } from '@/app/services/auth/auth.api.types'
import { PostImage } from '@/app/services/posts/posts.types'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

export type ImageSliderType = {
  images: PostImageViewModel[]
  aspectRatio: '1/1' | '4/5' | '4/3' | '16/9'
  fitStyle: 'cover' | 'contain'
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  isEditMode?: boolean
  isMyProfile?: boolean
  user?: UserModel | undefined
}

export type SliderControlsType = {
  images: PostImageViewModel[]
  imageIndex: number
  setImageIndex: Dispatch<SetStateAction<number>>
  isModified?: boolean
  inlineStyle?: any
  isEditMode?: boolean
}

export type IconType = 'cropper' | 'zoom' | 'image'
