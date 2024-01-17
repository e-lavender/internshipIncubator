import { Dispatch, SetStateAction } from 'react'

import { MockedImagesDataType } from '@/app/data/image-slider/image-slider-data'

export type ImageModel = {
  id: string | number
  url: string
  alt: string
  croppedImage?: any
  filter?: string
}

export type ImageSliderType = {
  images: ImageModel[] | MockedImagesDataType
  aspectRatio: '1/1' | '4/5' | '4/3' | '16/9'
  fitStyle: 'cover' | 'contain'
  size?: number
  setActiveFilter?: (activeFilter: string) => void
}

export type SliderControlsType = {
  images: ImageModel[] | MockedImagesDataType
  imageIndex: number
  setImageIndex: Dispatch<SetStateAction<number>>
  isModified?: boolean
  inlineStyle?: any
}
