import { CSSProperties, Dispatch, SetStateAction } from 'react'

import { MockedImagesDataType } from '@/app/data/image-slider/image-slider-data'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

export type ImageModel = {
  id: string | number
  url: string
  alt: string
  filter?: string
}

export type ImageSliderType = {
  images?: ImageModel[] | PostImageViewModel[]
  aspectRatio: '1/1' | '4/5' | '4/3' | '16/9'
  fitStyle: 'cover' | 'contain'
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

export type SliderControlsType = {
  images: ImageModel[] | MockedImagesDataType
  imageIndex: number
  setImageIndex: Dispatch<SetStateAction<number>>
  isModified?: boolean
  inlineStyle?: any
}

export type IconType = 'cropper' | 'zoom' | 'image'
