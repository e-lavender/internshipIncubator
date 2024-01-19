import { CSSProperties, PropsWithChildren } from 'react'

import s from './image-slider-container.module.scss'

import { SliderControlsType, ImageSliderControls, ImageModel } from '@/components'

type ImageSliderContainerType = {
  size?: CSSProperties['width']
  aspectRatio?: CSSProperties['aspectRatio']
  images: ImageModel[]
} & Pick<SliderControlsType, 'imageIndex' | 'setImageIndex'>
export const ImageSliderContainer = ({
  images,
  size,
  imageIndex,
  setImageIndex,
  children,
}: PropsWithChildren<ImageSliderContainerType>) => {
  return (
    <div
      className={s.container}
      style={{
        maxWidth: `${size}px`,
      }}
    >
      <div className={s.images}>{children}</div>

      <ImageSliderControls images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} />
    </div>
  )
}
