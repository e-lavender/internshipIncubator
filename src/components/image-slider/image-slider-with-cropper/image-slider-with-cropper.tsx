import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Cropper, { Area } from 'react-easy-crop'

import s from '../image-slider.module.scss'

import { useRtkStateHook } from '@/app/hooks/useRtkState.hook'
import { addCroppedImage } from '@/app/services/posts/slider.slice'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { ImageSliderContainer, CropperMenu, getCroppedAndFilteredImage } from '@/components'

type ImageSliderType = {
  images?: PostImageViewModel[]
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
  //TODO as unknown as string was added to fix TS Error
  const onCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedAndFilteredImage({
        imageSrc: images[imageIndex].url,
        pixelCrop: croppedAreaPixels,
      })

      if (croppedImage?.objectUrl) {
        _dispatch(addCroppedImage({ index: imageIndex, croppedImage: croppedImage.objectUrl }))
      }
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
          key={images[imageIndex]?.uploadId}
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
