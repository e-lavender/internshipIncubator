import React from 'react'

import ImageWithFilter, { StaticImageData } from 'next/image'

import { filtersVariant } from './filters-variant'
import s from './selected-images.module.scss'

import airBalloon from '@/app/assets/image/airBalloonImage.jpg'
import { Typography } from '@/ui'

type Props = {
  setActiveFilter: (activeFilter: string) => void
  url: string | StaticImageData
}

export const SelectedImages = ({ setActiveFilter, url }: Props) => {
  const onActiveFilter = (filter: string) => {
    switch (filter) {
      case 'No filter':
        setActiveFilter('none')
        break
      case 'Kyoto':
        setActiveFilter('saturate(2)')
        break
      case 'Lark':
        setActiveFilter('grayscale(100%)')
        break
      case 'Gingham':
        setActiveFilter('contrast(160%)')
        break
      case 'Happy':
        setActiveFilter('contrast(110%) brightness(110%) saturate(130%)')
        break
      case 'Clarendon':
        setActiveFilter('invert(100%)')
        break
      case 'Shabby':
        setActiveFilter('sepia(100%)')
        break
      case 'Old school': {
        setActiveFilter('opacity(50%)')
        break
      }
      case 'Silent Hill': {
        setActiveFilter('hue-rotate(180deg)')
        break
      }
      default: {
        setActiveFilter('')
        break
      }
    }
  }

  return (
    <>
      <div className={s.filterContainer}>
        {filtersVariant.map(filterVariant => {
          const { name, filter } = filterVariant

          return (
            <div key={name} className={s.imgWithFilter} onClick={() => onActiveFilter(name)}>
              <ImageWithFilter
                src={url || airBalloon}
                alt={'image-with-filter'}
                objectFit={'contain'}
                width={108}
                height={108}
                style={{
                  filter: filter,
                }}
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
