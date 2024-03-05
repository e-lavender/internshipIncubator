import { CSSProperties, PropsWithChildren } from 'react'

import s from './image-slider-container.module.scss'

import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { SliderControlsType, ImageSliderControls } from '@/components'

type ImageSliderContainerType = PropsWithChildren<
  {
    width?: CSSProperties['width']
    height?: CSSProperties['height']
    aspectRatio?: CSSProperties['aspectRatio']
    images: PostImageViewModel[]
  } & Pick<SliderControlsType, 'imageIndex' | 'setImageIndex' | 'isEditMode'>
>
export const ImageSliderContainer = ({
  images,
  width,
  height,
  imageIndex,
  setImageIndex,
  aspectRatio,
  children,
  isEditMode,
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

      <ImageSliderControls
        images={images}
        imageIndex={imageIndex}
        isEditMode={isEditMode}
        setImageIndex={setImageIndex}
      />
    </div>
  )
}
