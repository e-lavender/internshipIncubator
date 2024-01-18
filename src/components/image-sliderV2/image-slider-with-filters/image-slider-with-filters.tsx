import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider-with-filters.module.scss'

import { setActiveImageFilter } from '@/app/services/post/slider.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import { ImageSliderControls, ImageSliderType, SelectedImages } from '@/components'

export const ImageSliderWithFilters = ({
  images,
  size,
  aspectRatio,
  fitStyle,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const dispatch = useAppDispatch()

  const { url, id } = images[imageIndex]

  const onFilterChange = (filter: string) => {
    dispatch(setActiveImageFilter({ id, filter }))
  }

  return (
    <div
      className={s.container}
      style={{
        maxWidth: `${size}px`,
        aspectRatio: `${aspectRatio}`,
      }}
    >
      <div className={s.images}>
        {images.map(image => (
          <div
            key={image.id}
            style={{ translate: `${-100 * imageIndex}%`, filter: image.filter }}
            className={clsx(s.imageSlider, s[fitStyle])}
          >
            <Image objectFit={fitStyle} fill src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>

      <ImageSliderControls
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        isModified
      />

      <div className={s.filters}>
        <SelectedImages url={url} setActiveFilter={onFilterChange} />
      </div>
    </div>
  )
}
