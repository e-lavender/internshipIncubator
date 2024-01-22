import ImageWithFilter, { StaticImageData } from 'next/image'

import { filtersVariant } from './filters-variant'
import s from './selected-images.module.scss'

import airBalloon from '@/app/assets/image/airBalloonImage.jpg'
import { useActiveFilterChange } from '@/components/post/create/selected-images/useActiveFilterChange'
import { Typography } from '@/ui'

type SelectedImagesProps = {
  setActiveFilter: (filter: string) => void
  url: string | StaticImageData
}

export const SelectedImages = ({ setActiveFilter, url }: SelectedImagesProps) => {
  const onActiveFilterChange = useActiveFilterChange(setActiveFilter)

  return (
    <>
      <div className={s.filterContainer}>
        {filtersVariant.map(filterVariant => {
          const { name, filter } = filterVariant

          return (
            <div
              key={name}
              className={s.imgWithFilter}
              onClick={() => onActiveFilterChange(name)}
              tabIndex={0}
            >
              <ImageWithFilter
                src={url || airBalloon}
                alt={'image-with-filter'}
                objectFit={'contain'}
                width={108}
                height={108}
                style={{ filter }}
                className={s.image}
              />

              <div className={s.filterName}>
                <Typography variant={'h3'}>{name}</Typography>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
