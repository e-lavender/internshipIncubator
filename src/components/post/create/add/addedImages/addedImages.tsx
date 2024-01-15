import React, { useEffect } from 'react'

import ImageToAdd from 'next/image'

import s from './addedImages.module.scss'

import { CloseIcon } from '@/app/assets/svg/close-icon-svg'
import { ImageModel } from '@/components/image-slider/image-slider-types'

type Props = {
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
}

export const AddedImages = ({ addedImages, setAddedImages }: Props) => {
  const imagesToShow = addedImages.slice(-2)

  useEffect(() => {
    setAddedImages(addedImages)
  }, [addedImages])

  const onDeleteImage = (i: number) => {
    const image = i === 0 ? imagesToShow.slice(1) : imagesToShow.slice(0, -1)

    setAddedImages(addedImages.slice(0, -2).concat(image))
  }

  return (
    <div className={addedImages.length === 10 ? s.wrapperForImg : s.wrapper}>
      {addedImages.length <= 1
        ? addedImages.map((el, idx) => {
            return (
              <div key={idx} className={s.addedPhoto}>
                <ImageToAdd
                  className={s.oneImage}
                  src={el.croppedImage ? el.croppedImage : el.url}
                  alt={'photos'}
                  height={82}
                  width={80}
                />
              </div>
            )
          })
        : imagesToShow.map((el, i) => {
            return (
              <div key={i} className={s.addedPhoto}>
                <div className={s.closeIcon} onClick={() => onDeleteImage(i)}>
                  <CloseIcon className={s.close} width={12} height={12} />
                </div>
                <ImageToAdd
                  src={el.croppedImage ? el.croppedImage : el.url}
                  alt={'photo in small add window'}
                  height={82}
                  width={80}
                />
              </div>
            )
          })}
    </div>
  )
}
