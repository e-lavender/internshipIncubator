import React, { useState } from 'react'

import { LandscapeCrop } from '@/app/assets/svg/image-cropper/crop-icons/landscape'
import { OriginalCrop } from '@/app/assets/svg/image-cropper/crop-icons/original'
import { PortraitCrop } from '@/app/assets/svg/image-cropper/crop-icons/portrait'
import { SquareCrop } from '@/app/assets/svg/image-cropper/crop-icons/square'
import { Add } from '@/components/image-slider/add/add'
import CropMenu from '@/components/image-slider/crop-menu/crop-menu'
import CropMenuItem from '@/components/image-slider/crop-menu/crop-menu-item'
import useImageCrop from '@/components/image-slider/hooks/useImageCrop'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { Zoom } from '@/components/image-slider/zoom/zoom'
import { Button } from '@/ui'

type Props = {
  images: ImageModel[]
  setCroppedImages: (croppedImage: ImageModel[]) => void
  croppedAreaPixels: null
  zoom: number
  setZoom: (zoom: number) => void
  setAspectRatio: ((aspectRatio: number) => void) | undefined
  setAddedImages: (addedImages: ImageModel[]) => void
  crop: { x: number; y: number }
  aspectRatio: any
}
const CropperMenu = ({
  images,
  setCroppedImages,
  croppedAreaPixels,
  zoom,
  crop,
  aspectRatio,
  setZoom,
  setAspectRatio,
  setAddedImages,
}: Props) => {
  const [cropMenuSelected, setCropMenuSelected] = useState('1')
  const { getCroppedImg } = useImageCrop()

  const setCroppedImageFor = (
    id: string,
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

      setCroppedImageFor(images[0].id, crop, zoom, aspectRatio, croppedImage)
    }
  }
  const menuData = [
    {
      id: '1',
      icon: <OriginalCrop />,
      title: 'Original',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(4 / 3)
        }
        setCropMenuSelected(id)
      },
    },
    {
      id: '2',
      icon: <SquareCrop />,
      title: '1:1',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(1)
        }
        setCropMenuSelected(id)
      },
    },
    {
      id: '3',
      icon: <PortraitCrop />,
      title: '4:5',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(4 / 5)
        }
        setCropMenuSelected(id)
      },
    },
    {
      id: '4',
      icon: <LandscapeCrop />,
      title: '16:9',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(16 / 9)
        }
        setCropMenuSelected(id)
      },
    },
  ]

  return (
    <>
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
          <CropMenu icon={'zoom'}>
            <Zoom zoom={zoom} setZoom={setZoom} />
          </CropMenu>
        </div>
        <CropMenu icon={'image'} isImage={true}>
          <Add addedImages={images} setAddedImages={setAddedImages} />
        </CropMenu>
      </div>
      <Button onClick={onCrop}>Crop</Button>
    </>
  )
}

export default CropperMenu
