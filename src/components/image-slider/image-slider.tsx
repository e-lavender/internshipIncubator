import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider.module.scss'

import { CloseIcon } from '@/app'
import { useDeleteImagePostMutation } from '@/app/services/posts/posts.api'
import { ImageSliderContainer, ImageSliderType } from '@/components'

export const ImageSlider = ({
  images = [],
  width,
  height,
  fitStyle,
  aspectRatio,
  isEditMode,
  user,
  isMyProfile,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [deletePostImage] = useDeleteImagePostMutation()

  const handleDeletePostImage = async (uploadId: string) => {
    try {
      await deletePostImage({ uploadId }).unwrap()
    } catch (error: unknown) {
      console.error(`${error}`)
    }
  }

  return (
    <ImageSliderContainer
      images={images}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
      isEditMode={isEditMode}
    >
      {images.map((image, index) => (
        <div
          key={image.url}
          style={{
            translate: `${-100 * imageIndex}%`,
            filter: 'image.filter',
          }}
          className={clsx(s.imageSlider, s[fitStyle])}
        >
          {isEditMode && user && isMyProfile && images.length > 1 && (
            <CloseIcon className={s.delete} onClick={() => handleDeletePostImage(image.uploadId)} />
          )}
          <Image objectFit={fitStyle} fill src={image.url} alt={'image'} />
        </div>
      ))}
    </ImageSliderContainer>
  )
}
