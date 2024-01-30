import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider.module.scss'

import { ImageSliderContainer, ImageSliderType } from '@/components'

export const ImageSlider = ({
  images = [],
  width,
  height,
  fitStyle,
  aspectRatio,
}: ImageSliderType) => {
  const [sliderImages, setSliderImages] = useState(images)
  const [imageIndex, setImageIndex] = useState<number>(0)

  return (
    <ImageSliderContainer
      // @ts-ignore
      images={sliderImages}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
    >
      {images.map(image => (
        <div
          key={image.id}
          style={{
            translate: `${-100 * imageIndex}%`,
            filter: image.filter,
          }}
          className={clsx(s.imageSlider, s[fitStyle])}
        >
          <Image objectFit={fitStyle} fill src={image.url} alt={image.alt} />
        </div>
      ))}
    </ImageSliderContainer>
  )
}
