import s from './filtered-images.module.scss'

import { ImageModel, ImageSlider } from '@/components'

type Props = {
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  activeFilter: string
}

export const FilteredImages = ({ addedImages, activeFilter, setAddedImages }: Props) => {
  return (
    <>
      <div className={s.imgContainer}>
        <ImageSlider
          images={addedImages}
          setAddedImages={setAddedImages}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
          withFilters
          activeFilter={activeFilter}
        />
      </div>
    </>
  )
}
