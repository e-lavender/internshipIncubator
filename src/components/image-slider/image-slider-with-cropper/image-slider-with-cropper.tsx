import React, { useCallback, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Cropper from 'react-easy-crop'

import s from '../image-slider.module.scss'

import { useAppSelector } from '@/app/store/rtk.types'
import { ImageSliderContainer, ImageModel, CropperMenu } from '@/components'

type ImageSliderType = {
  images?: ImageModel[]
  aspectRatio: number
  fitStyle: 'cover' | 'contain'
  setAspectRatio?: (aspectRatio: number) => void
}
export const ImageSliderWithCropper = ({
  images = [],
  aspectRatio,
  setAspectRatio,
  fitStyle,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const globalImageIndex = useAppSelector(state => state.slider.currentImageIndex)

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels)
    },
    [images]
  )

  console.log(croppedAreaPixels)

  useEffect(() => {
    if (imageIndex > images?.length - 1) {
      setImageIndex(images.length - 1)
    }

    setZoom(1)
  }, [images])

  useEffect(() => {
    setImageIndex(globalImageIndex)
  }, [globalImageIndex])

  return (
    <ImageSliderContainer images={images} imageIndex={imageIndex} setImageIndex={setImageIndex}>
      {images.map(image => (
        <div
          key={image.id}
          style={{
            translate: `${-100 * imageIndex}%`,
            aspectRatio: `${aspectRatio}`,
          }}
          className={clsx(s.imageSlider, s.transition, s[fitStyle])}
        >
          <Cropper
            objectFit={'contain'}
            image={image.url}
            aspect={aspectRatio}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            zoomWithScroll
            showGrid={false}
          />
        </div>
      ))}

      <CropperMenu
        images={images}
        imageIndex={imageIndex}
        croppedAreaPixels={croppedAreaPixels}
        zoom={zoom}
        crop={crop}
        aspectRatio={aspectRatio}
        setZoom={setZoom}
        setAspectRatio={setAspectRatio}
      />
    </ImageSliderContainer>
  )
}
