import React from 'react'

import ImageWithFilter from 'next/image'

import { filtersVariant } from './filters-variant'
import s from './selected-images.module.scss'

import airBalloon from '@/app/assets/image/airBalloonImage.jpg'
import { Typography } from '@/ui'

type Props = {
  setActiveFilter: (activeFilter: string) => void
}

export const SelectedImages = ({ setActiveFilter }: Props) => {
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
        {filtersVariant.map((el, idx) => {
          return (
            <div key={idx} className={s.imgWithFilter} onClick={() => onActiveFilter(el.name)}>
              <ImageWithFilter
                src={airBalloon}
                alt={'image-with-filter'}
                width={108}
                height={108}
                style={{
                  filter: el.filter,
                }}
                className={s.image}
              />
              <div className={s.filterName}>
                <Typography variant={'h3'}>{el.name}</Typography>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
