import { ReactElement, useState } from 'react'

import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'

import s from './create-new-post-modal.module.scss'

import { ErrorWithData, useDisclose } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { useAddPostMutation } from '@/app/services/post/post.api'
import { resetImagesToDefaultState } from '@/app/services/post/slider.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
import { showError } from '@/app/utils'
import { LoaderV2, Modal } from '@/components'
import AddInterface from '@/components/intefaces/add-interface'
import CropInterface from '@/components/intefaces/crop-interface'
import DescriptionInterface from '@/components/intefaces/description-interface'
import FilterInterface from '@/components/intefaces/filter-interface'
import { ConfirmationModal } from '@/components/modals/confirmation-modal/confirmation-modal'
import { filteredImg } from '@/components/post/create/filters/Filters'
import { useCreatePost } from '@/components/post/create/useCreatePost'

const CreateNewPostModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { url, step, stepUp, stepForward, stepBack, setPreferredStep } = useCreatePost()
  const [addPost, { isLoading: isPostUploading }] = useAddPostMutation()

  const chosenImages = useAppSelector(state => state.slider.images)
  const postDescription = useAppSelector(state => state.slider.description)

  const addNewPost = async () => {
    const formData = new FormData()

    setIsLoading(true)

    const imagePromises = chosenImages.map(async image => {
      const filteredImage = await filteredImg(image.url, image.filter)

      if (!filteredImage) {
        return null
      }

      const file = new File([filteredImage], image.url, {
        type: 'image/jpeg',
      })

      formData.append('images', file)

      return {
        image: filteredImage,
      }
    })

    await Promise.all(imagePromises)

    formData.append('description', postDescription)

    addPost(formData)
      .unwrap()
      .then(() => {
        /*
          Todo additional logic if necessary
        */
      })
      .catch((error: ErrorWithData) => {
        showError(error)
      })
      .finally(() => setIsLoading(false))
  }

  const interfaceVariants: { [Key: string]: ReactElement } = {
    1: <AddInterface url={url} callback={stepUp} />,
    2: <CropInterface images={chosenImages} />,
    3: <FilterInterface images={chosenImages} />,
    4: <DescriptionInterface images={chosenImages} />,
  }

  const titleVariants: { [Key: string]: string } = {
    1: 'Add photo',
    2: 'Cropping',
    3: 'Filters',
    4: 'Publication',
  }

  const CurrentInterface: ReactElement = interfaceVariants[step]
  const CurrentTitle: string = titleVariants[step]

  const { isOpen: isCreatePostModalOpen, closeCreatePostModal: closeCreatePostModal } =
    useCreatePostModal()
  const {
    isOpen: isConfirmationModalOpen,
    onOpen: openConfirmationModal,
    onClose: closeConfirmationModal,
  } = useDisclose()

  const dispatch = useAppDispatch()

  const handleOutsideClick = (e: PointerDownOutsideEvent | FocusOutsideEvent) => {
    e.preventDefault()
    openConfirmationModal()
  }
  const onConfirm = () => {
    closeCreatePostModal()
    setPreferredStep(1)

    dispatch(resetImagesToDefaultState())
  }

  return (
    <>
      <Modal open={isCreatePostModalOpen} onChange={closeCreatePostModal}>
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

      <LoaderV2 isLoading={isLoading || isPostUploading} label={'Saving...'} />
    </>
  )
}

export default CreateNewPostModal
