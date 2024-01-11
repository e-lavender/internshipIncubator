import React from 'react'

import s from './filtered-images.module.scss'

import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'

type Props = {
  addedImages: ImageModel[]
  activeFilter: string
}

export const FilteredImages = ({ addedImages, activeFilter }: Props) => {
  return (
    <>
      <div className={s.imgContainer}>
        <ImageSlider
          images={addedImages}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
          withFilters={true}
          activeFilter={activeFilter}
        />
      </div>
    </>
  )
}
