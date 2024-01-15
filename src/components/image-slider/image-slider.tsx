import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'
import Cropper from 'react-easy-crop'

import s from './image-slider.module.scss'

import { ChevronLeft, ChevronRight } from '@/app'
import { ImageSliderProps } from '@/components/image-slider/image-slider-types'
import CropperMenu from '@/components/post/create/crop-menu/cropper-menu'

const ImageSlider = ({
  onClick,
  images,
  setAddedImages,
  aspectRatio,
  fitStyle,
  size = 500,
  withCropper,
  setAspectRatio,
  activeFilter,
}: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedImages, setCroppedImages] = useState(images)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }
  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0

      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1

      return index - 1
    })
  }

  {
    /*@TODO:make aspectRatio as typed prop like 'landscape' | 'portrait' */
  }
  useEffect(() => {
    setCroppedImages(images)
  }, [images])

  return (
    <div
      className={s.container}
      style={{
        maxWidth: `${size}px`,
        aspectRatio: `${aspectRatio}`,
        filter: activeFilter,
      }}
    >
      <div className={s.images}>
        {croppedImages.map(image => {
          const onClickHandler = () => {
            onClick && onClick(image.id)
          }

          return withCropper ? (
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
                zoomWithScroll={true}
                showGrid={false}
              />
            </div>
          ) : (
            <div
              key={image.id}
              style={{ translate: `${-100 * imageIndex}%` }}
              className={clsx(s.imageSlider, s[fitStyle])}
            >
              <Image
                fill={true}
                src={image.croppedImage ? image.croppedImage : image.url}
                alt={image.alt}
                onClick={onClickHandler}
              />
            </div>
          )
        })}
      </div>
      {images.length > 1 && (
        <>
          <button className={s.buttonSlider} style={{ left: '0' }} onClick={showPrevImage}>
            <div className={s.icon}>
              <ChevronLeft />
            </div>
          </button>
          <button className={s.buttonSlider} style={{ right: '0' }} onClick={showNextImage}>
            <div className={s.icon}>
              <ChevronRight />
            </div>
          </button>
          <div className={s.dotButtons}>
            {images.map((_, index) => {
              return (
                <button key={index} className={s.dotButton} onClick={() => setImageIndex(index)}>
                  <div className={clsx(s.dot, index === imageIndex && s.isActive)}></div>
                </button>
              )
            })}
          </div>
        </>
      )}
      {withCropper && (
        <CropperMenu
          imageIndex={imageIndex}
          images={croppedImages}
          setCroppedImages={setCroppedImages}
          croppedAreaPixels={croppedAreaPixels}
          zoom={zoom}
          crop={crop}
          aspectRatio={aspectRatio}
          setZoom={setZoom}
          setAspectRatio={setAspectRatio}
          setAddedImages={setAddedImages}
        />
      )}
    </div>
  )
}

export default ImageSlider
