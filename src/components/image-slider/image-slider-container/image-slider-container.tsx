import { CSSProperties, PropsWithChildren } from 'react'

import s from './image-slider-container.module.scss'

import { PostImage } from '@/app/services/posts/posts.types'
import { SliderControlsType, ImageSliderControls, ImageModel } from '@/components'

type ImageSliderContainerType = PropsWithChildren<
  {
    width?: CSSProperties['width']
    height?: CSSProperties['height']
    aspectRatio?: CSSProperties['aspectRatio']
    images: ImageModel[] | PostImage[]
  } & Pick<SliderControlsType, 'imageIndex' | 'setImageIndex'>
>
export const ImageSliderContainer = ({
  images,
  width,
  height,
  imageIndex,
  setImageIndex,
  aspectRatio,
  children,
}: ImageSliderContainerType) => {
  return (
    <div
      className={s.container}
      style={{
        width,
        height,
        aspectRatio,
      }}
    >
      <div className={s.images}>{children}</div>

      <ImageSliderControls images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} />
    </div>
  )
}
