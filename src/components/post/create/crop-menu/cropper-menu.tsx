import React from 'react'

import s from './crop-menu.module.scss'

import { addCroppedImage } from '@/app/services/post/slider.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import {
  AddImage,
  CropMenu,
  CropMenuItem,
  getCroppedAndFilteredImage,
  ImageModel,
  SliderZoom,
  useCropperMenu,
} from '@/components'
import { Button } from '@/ui'

type CropperMenuProps = {
  // images: ImageModel[]
  zoom: number
  setZoom: (zoom: number) => void
  setAspectRatio?: (aspectRatio: number) => void
  onCrop?: () => Promise<void>
}
export const CropperMenu = ({ zoom, setZoom, setAspectRatio, onCrop }: CropperMenuProps) => {
  const { cropperMenuVersion, cropMenuSelected } = useCropperMenu(setAspectRatio)

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.cropMenu}>
          <CropMenu icon={'cropper'}>
            {cropperMenuVersion.map(item => {
              const MenuIcon = item.icon

              return (
                <CropMenuItem
                  {...item}
                  icon={<MenuIcon />}
                  onClick={() => item.onClick(item.id)}
                  selected={item.id === cropMenuSelected}
                  key={item.id}
                />
              )
            })}
          </CropMenu>

          <CropMenu icon={'zoom'}>
            <SliderZoom sliderValue={zoom} setSliderValue={setZoom} isZoom />
          </CropMenu>
        </div>

        <Button onClick={onCrop}>Crop</Button>

        <CropMenu icon={'image'} isImage>
          <AddImage />
        </CropMenu>
      </div>
    </>
  )
}
