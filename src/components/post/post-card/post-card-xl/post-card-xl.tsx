import { ReactElement } from 'react'

import { useDisclose, useRtkStateHook } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import {
  PostCardModal,
  ImageSlider,
  PostCardXLType,
  ViewModeInterface,
  EditModeInterface,
} from '@/components'
import { Button } from '@/ui'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const PostCardXL = (props: PostCardXLType) => {
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()

  const {
    _state: { post },
  } = useRtkStateHook()

  const isEditMode: boolean = post.mode === 'edit'

  const interfaces: InterfaceType = {
    view: <ViewModeInterface {...props} />,
    edit: <EditModeInterface {...props} />,
  }

  const CurrentInterface: ReactElement = interfaces[post.mode]

  return (
    <>
      <Button onClick={openModal}>Show Post Details</Button>

      <PostCardModal
        isOpen={isModalOpened}
        onChange={closeModal}
        askConfirmation={isEditMode}
        isModified={!isEditMode}
      >
        <ImageSlider
          images={IMAGE_SLIDER_DATA.slice(0, 4)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
        />

        {CurrentInterface}
      </PostCardModal>
    </>
  )
}
