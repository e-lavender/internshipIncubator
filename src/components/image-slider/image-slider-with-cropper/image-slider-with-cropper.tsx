import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Cropper, { Area } from 'react-easy-crop'

import s from '../image-slider.module.scss'

import { useRtkStateHook } from '@/app/hooks/useRtkState.hook'
import { addCroppedImage } from '@/app/services/post/slider.slice'
import {
  ImageSliderContainer,
  ImageModel,
  CropperMenu,
  getCroppedAndFilteredImage,
} from '@/components'

type ImageSliderType = {
  images?: ImageModel[]
  aspectRatio: number
  fitStyle: 'cover' | 'contain'
  setAspectRatio: (aspectRatio: number) => void
}
export const ImageSliderWithCropper = ({
  images = [],
  aspectRatio,
  setAspectRatio,
  fitStyle,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const { _state, _dispatch } = useRtkStateHook()
  const { currentImageIndex: globalImageIndex } = _state.slider

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = (await getCroppedAndFilteredImage(
        images[imageIndex].url,
        croppedAreaPixels
      )) as string

      _dispatch(addCroppedImage({ index: imageIndex, croppedImage }))
    }
  }

  useEffect(() => {
    if (imageIndex > images?.length - 1) {
      setImageIndex(images.length - 1)
    }

    if (zoom > 1) {
      setZoom(1)
    }
  }, [images, imageIndex])

  useEffect(() => {
    if (globalImageIndex !== imageIndex) {
      setImageIndex(globalImageIndex)
    }
  }, [globalImageIndex])

  return (
    <>
      <ImageSliderContainer images={images} imageIndex={imageIndex} setImageIndex={setImageIndex}>
        <div
          key={images[imageIndex]?.id}
          className={clsx(s.imageSlider, s.transition, s[fitStyle], s.container)}
        >
          <Cropper
            objectFit={'contain'}
            image={images[imageIndex]?.url || ''}
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

        <CropperMenu
          zoom={zoom}
          onCrop={onCrop}
          setZoom={setZoom}
          setAspectRatio={setAspectRatio}
        />
      </ImageSliderContainer>
    </>
  )
}
