import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'
import Cropper from 'react-easy-crop'

import s from './image-slider.module.scss'

import { ChevronLeft, ChevronRight } from '@/app'
import { ImageCropper } from '@/app/assets/svg/image-cropper'
import { LandscapeCrop } from '@/app/assets/svg/image-cropper/crop-icons/landscape'
import { OriginalCrop } from '@/app/assets/svg/image-cropper/crop-icons/original'
import { PortraitCrop } from '@/app/assets/svg/image-cropper/crop-icons/portrait'
import { SquareCrop } from '@/app/assets/svg/image-cropper/crop-icons/square'
import CropMenu from '@/components/image-slider/crop-menu/crop-menu'
import CropMenuItem from '@/components/image-slider/crop-menu/crop-menu-item'
import useImageCrop from '@/components/image-slider/hooks/useImageCrop'
import { ImageSliderProps } from '@/components/image-slider/image-slider-types'
import { Button } from '@/ui'

const ImageSlider = ({
  onClick,
  images,
  aspectRatio,
  fitStyle,
  size = 500,
  withCropper,
}: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedImages, setCroppedImages] = useState(images)
  const [cropMenuSelected, setCropMenuSelected] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const { getCroppedImg } = useImageCrop()
  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  console.log('croppedImages', croppedImages)
  const setCroppedImageFor = (
    id: number,
    crop: any,
    zoom: any,
    aspect: any,
    croppedImage: string
  ) => {
    const newImageList = [...images]
    const imageIndex = images.findIndex(x => x.id === id)
    const image = images[imageIndex]
    const newImage = { ...image, croppedImage, crop, zoom, aspect }

    newImageList[imageIndex] = newImage
    setCroppedImages(newImageList)
  }
  const onCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(images[0].url, croppedAreaPixels)

      setCroppedImageFor(images[0].id, crop, zoom, undefined, croppedImage)
    }
  }
  const menuData = [
    {
      id: 1,
      icon: <OriginalCrop />,
      title: 'Original',
      onClick: (id: number) => setCropMenuSelected(id),
    },
    {
      id: 2,
      icon: <SquareCrop />,
      title: '1:1',
      onClick: (id: number) => setCropMenuSelected(id),
    },
    {
      id: 3,
      icon: <PortraitCrop />,
      title: '4:5',
      onClick: (id: number) => setCropMenuSelected(id),
    },
    {
      id: 4,
      icon: <LandscapeCrop />,
      title: '16:9',
      onClick: (id: number) => setCropMenuSelected(id),
    },
  ]

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

  return (
    <div
      className={s.container}
      style={{
        maxWidth: `${size}px`,
        aspectRatio: `${aspectRatio}`,
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
                objectFit={'cover'}
                image={image.croppedImage ? image.croppedImage.src : image.url.src}
                aspect={1}
                crop={crop}
                zoom={zoom}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
          ) : (
            <Image
              style={{ translate: `${-100 * imageIndex}%` }}
              key={image.id}
              className={clsx(s.imageSlider, s[fitStyle])}
              src={image.url}
              alt={image.alt}
              onClick={onClickHandler}
            />
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px',
            border: '1px solid green',
            position: 'relative',
            transform: 'translateY(-100%)',
          }}
        >
          <div style={{ display: 'flex', columnGap: '12px' }}>
            <CropMenu icon={'cropper'}>
              {menuData.map(item => {
                return (
                  <CropMenuItem
                    {...item}
                    onClick={() => item.onClick(item.id)}
                    selected={item.id === cropMenuSelected}
                    key={item.id}
                  />
                )
              })}
            </CropMenu>
            <CropMenu icon={'zoom'} />
          </div>
          <CropMenu icon={'image'} />
        </div>
      )}
      <Button onClick={onCrop}>Crop</Button>
      <img src={croppedImages[0].croppedImage} alt={''} />
    </div>
  )
}

export default ImageSlider
