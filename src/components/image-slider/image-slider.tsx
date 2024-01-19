import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider.module.scss'

import { ImageSliderContainer, ImageSliderType } from '@/components'

export const ImageSlider = ({ images, size, aspectRatio, fitStyle }: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <ImageSliderContainer
      images={images}
      size={size}
      aspectRatio={aspectRatio}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
    >
      {images.map(image => (
        <div
          key={image.id}
          style={{ translate: `${-100 * imageIndex}%`, filter: image.filter }}
          className={clsx(s.imageSlider, s[fitStyle])}
        >
          <Image objectFit={fitStyle} fill src={image.url} alt={image.alt} />
        </div>
      ))}
    </ImageSliderContainer>
  )
}
