import React, { useEffect } from 'react'

import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { SelectedImages } from '@/components/post/create/selected-images/selected-images'

type FilterInterfaceProps = {
  callback: (file: File) => void
  url: string
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void

  activeFilter: string
  setActiveFilter: (activeFilter: string) => void
}
const FilterInterface = ({
  addedImages,
  activeFilter,
  setActiveFilter,
  setAddedImages,
}: FilterInterfaceProps) => {
  useEffect(() => {
    setAddedImages(addedImages)
  }, [addedImages])

  return (
    <>
      <ImageSlider
        images={addedImages}
        aspectRatio={'1/1'}
        fitStyle={'contain'}
        activeFilter={activeFilter}
        setAddedImages={setAddedImages}
      />
      <SelectedImages setActiveFilter={setActiveFilter} />
    </>
  )
}

export default FilterInterface