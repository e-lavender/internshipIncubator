import React from 'react'

import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { PostDescription } from '@/components/post-descrition/post-description'

type DescriptionInterfaceProps = {
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  activeFilter: string
  setValue: (value: string) => void
}

const DescriptionInterface = ({
  activeFilter,
  addedImages,
  setAddedImages,
  setValue,
}: DescriptionInterfaceProps) => {
  return (
    <>
      <ImageSlider
        images={addedImages}
        setAddedImages={setAddedImages}
        aspectRatio={'1/1'}
        fitStyle={'cover'}
        withFilters={true}
        activeFilter={activeFilter}
      />
      <PostDescription setValue={setValue} />
    </>
  )
}

export default DescriptionInterface
