import React, { useState } from 'react'

import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'

import s from './create-new-post-modal.module.scss'

import { useDisclose, useTranslation } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { useAddPostMutation } from '@/app/services/post/post.api'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import AddInterface from '@/components/intefaces/add-interface'
import CropInterface from '@/components/intefaces/crop-interface'
import DescriptionInterface from '@/components/intefaces/description-interface'
import FilterInterface from '@/components/intefaces/filter-interface'
import { ConfirmationModal } from '@/components/modals/confirmation-modal/confirmation-modal'
import { filteredImg } from '@/components/post/create/filters/Filters'
import { useCreatePost } from '@/components/post/create/useCreatePost'
import { Modal } from '@/ui'

const CreateNewPostModal = () => {
  const [addedImages, setAddedImages] = useState<ImageModel[]>([])
  const [aspectRatio, setAspectRatio] = useState(4 / 3)
  const [activeFilter, setActiveFilter] = useState('')
  const [value, setValue] = useState('')
  const { isOpen, closeCreatePostModal: close } = useCreatePostModal()
  const { url, step, stepUp, stepForward, stepBack } = useCreatePost()
  const [addPost] = useAddPostMutation()
  const { t } = useTranslation()
  const { add, cropping, filters, publication } = t.createPost

  const formData = new FormData()
  const addNewPost = async (activeFilter: string) => {
    const updatedImages = await Promise.all(
      addedImages.map(async (el, idx) => {
        const filteredImage = await filteredImg(
          el.croppedImage ? el.croppedImage : el.url,
          activeFilter
        )

        if (!filteredImage) {
          return null
        }
        const file = new File([filteredImage], el.url, {
          type: 'image/jpeg',
        })

        formData.append('images', file)

        return {
          image: filteredImage,
        }
      })
    )

    formData.append('description', value)

    addPost(formData)
      .unwrap()
      .then(() => {
        setActiveFilter('')
      })
  }

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
        setValue={setValue}
      />
    ),
  }

  const titleVariants = {
    1: add,
    2: cropping,
    3: filters,
    4: publication,
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
          addNewPost={addNewPost}
          activeFilter={activeFilter}
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
