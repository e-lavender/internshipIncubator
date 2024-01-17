import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Cropper from 'react-easy-crop'

import s from '../image-slider.module.scss'

import { useAppSelector } from '@/app/store/rtk.types'
import { ImageSliderContainer, ImageModel } from '@/components'
import CropperMenu from '@/components/post/create/crop-menu/cropper-menu'

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

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  useEffect(() => {
    if (imageIndex < images?.length - 1) return

    setImageIndex(images.length - 1)
  }, [images])

  useEffect(() => {
    setImageIndex(globalImageIndex)
  }, [globalImageIndex])

  return (
    <ImageSliderContainer
      images={images}
      aspectRatio={aspectRatio}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
    >
      {images.map(image => (
        <div
          key={image.id}
          style={{ translate: `${-100 * imageIndex}%` }}
          className={clsx(s.imageSlider, s[fitStyle])}
        >
          <Cropper
            objectFit={'contain'}
            image={image.croppedImage ? image.croppedImage : image.url}
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
