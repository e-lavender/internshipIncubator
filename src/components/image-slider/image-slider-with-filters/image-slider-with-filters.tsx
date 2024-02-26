import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider-with-filters.module.scss'

import { setActiveImageFilter } from '@/app/services/posts/slider.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import { ImageSliderControls, ImageSliderType, SelectedImages } from '@/components'

export const ImageSliderWithFilters = ({
  images,
  height,
  width,
  aspectRatio,
  fitStyle,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const dispatch = useAppDispatch()

  if (!images) {
    return null
  }

  const { url, uploadId } = images[imageIndex]

  const onFilterChange = (filter: string) => {
    dispatch(setActiveImageFilter({ id: uploadId, filter }))
  }

  return (
    <div
      className={s.container}
      style={{
        height,
        width,
        aspectRatio,
      }}
    >
      <div className={s.images}>
        {images?.map(image => (
          <div
            key={image.uploadId}
            style={{ translate: `${-100 * imageIndex}%`, filter: image.filter }}
            className={clsx(s.imageSlider, s[fitStyle])}
          >
            <Image
              objectFit={fitStyle}
              fill
              src={image.url}
              alt={image.alt || `img-${image.uploadId}`}
            />
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
