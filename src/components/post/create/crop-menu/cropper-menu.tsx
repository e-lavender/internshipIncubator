import s from './crop-menu.module.scss'

import { addCroppedImage } from '@/app/services/post/slider.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import useImageCrop from '@/components/image-sliderV2/hooks/useImageCrop'
import { Add } from '@/components/post/create/add/add'
import CropMenu from '@/components/post/create/crop-menu/crop-menu'
import CropMenuItem from '@/components/post/create/crop-menu/crop-menu-item'
import { useCropperMenu } from '@/components/post/create/crop-menu/useCropperMenu'
import { Zoom } from '@/components/post/create/zoom/zoom'
import { Button } from '@/ui'

type Props = {
  images: ImageModel[]
  imageIndex: number
  croppedAreaPixels: null
  zoom: number
  setZoom: (zoom: number) => void
  setAspectRatio?: (aspectRatio: number) => void
  setAddedImages?: (addedImages: ImageModel[]) => void
  crop: { x: number; y: number }
  aspectRatio: any
}
export const CropperMenu = ({
  images,
  imageIndex,
  croppedAreaPixels,
  zoom,
  setZoom,
  setAspectRatio,
}: Props) => {
  const { getCroppedImg } = useImageCrop()
  const { cropperMenuVersion, cropMenuSelected } = useCropperMenu(setAspectRatio)

  const dispatch = useAppDispatch()

  const setCroppedImageFor = (id: string, croppedImage: string) => {
    const imageIndex = images.findIndex(x => x.id === id)

    dispatch(addCroppedImage({ index: imageIndex, croppedImage }))
  }
  const onCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(images[imageIndex].url, croppedAreaPixels)

      setCroppedImageFor(images[imageIndex].id, croppedImage)
    }
  }

  return (
    <>
      <div className={s.wrapper}>
        <div style={{ display: 'flex', gap: '1.2rem' }}>
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
            <Zoom zoom={zoom} setZoom={setZoom} />
          </CropMenu>
        </div>

        <Button onClick={onCrop}>Crop</Button>

        <CropMenu icon={'image'} isImage={true}>
          <Add />
        </CropMenu>
      </div>
    </>
  )
}

export default CropperMenu
