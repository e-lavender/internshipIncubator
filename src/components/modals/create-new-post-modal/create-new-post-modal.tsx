import React, { useState } from 'react'

import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'

import s from './create-new-post-modal.module.scss'

import { useDisclose } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import AddInterface from '@/components/intefaces/add-interface'
import CropInterface from '@/components/intefaces/crop-interface'
import DescriptionInterface from '@/components/intefaces/description-interface'
import FilterInterface from '@/components/intefaces/filter-interface'
import { ConfirmationModal } from '@/components/modals/confirmation-modal/confirmation-modal'
import { useImageValidation } from '@/modules/account/account-image-picker/image-picker-modal/useImageValidation'
import { Modal } from '@/ui'

const CreateNewPostModal = () => {
  const [addedImages, setAddedImages] = useState<ImageModel[]>([])
  const [aspectRatio, setAspectRatio] = useState(4 / 3)
  const [activeFilter, setActiveFilter] = useState('')

  const { isOpen, closeCreatePostModal: close } = useCreatePostModal()
  const { url, step, stepUp, stepForward, stepBack } = useImageValidation()

  console.log(addedImages)

  const interfaceVariants = {
    1: (
      <AddInterface
        url={url}
        callback={stepUp}
        setAddedImages={setAddedImages}
        addedImages={addedImages}
      />
    ),
    2: (
      <CropInterface
        url={url}
        callback={stepUp}
        addedImages={addedImages}
        setAddedImages={setAddedImages}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    ),
    3: (
      <FilterInterface
        url={url}
        callback={stepUp}
        addedImages={addedImages}
        setAddedImages={setAddedImages}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    ),
    4: (
      <DescriptionInterface
        addedImages={addedImages}
        setAddedImages={setAddedImages}
        activeFilter={activeFilter}
      />
    ),
  }

  const titleVariants = {
    1: 'Add photo',
    2: 'Cropping',
    3: 'Filters',
    4: 'Publication',
  }

  const CurrentInterface: JSX.Element = interfaceVariants[step]
  const CurrentTitle = titleVariants[step]

  const {
    isOpen: isConfirmationModalOpen,
    onOpen: openConfirmationModal,
    onClose: closeConfirmationModal,
  } = useDisclose()

  const handleOutsideClick = (e: PointerDownOutsideEvent | FocusOutsideEvent) => {
    e.preventDefault
    openConfirmationModal()
  }
  const onConfirm = () => {
    close()
  }

  return (
    <>
      <Modal open={isOpen} onChange={close}>
        <Modal.Button asChild />
        <Modal.Content
          title={CurrentTitle}
          className={step === 1 || step === 2 ? s.content : s.filters}
          withCropper={step === 2}
          withFilter={step === 3}
          lastModal={step === 4}
          onInteractOutside={handleOutsideClick}
          stepForward={stepForward}
          stepBack={stepBack}
        >
          {CurrentInterface}
        </Modal.Content>
      </Modal>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        title={'Close create post'}
        message={'Are you sure you want to close ?'}
        onConfirmation={onConfirm}
      />
    </>
  )
}

export default CreateNewPostModal
