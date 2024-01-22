import { ReactElement, useState } from 'react'

import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'

import s from './create-new-post-modal.module.scss'

import { ErrorWithData, useDisclose, useFileCreationWithSteps } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { useAddPostMutation } from '@/app/services/post/post.api'
import { addImage, resetImagesToDefaultState } from '@/app/services/post/slider.slice'
import { useRtkStateHook } from '@/app/services/useRtkState.hook'
import { showError } from '@/app/utils'
import {
  AddInterface,
  ConfirmationModal,
  CropInterface,
  DescriptionInterface,
  FilterInterface,
  getCroppedAndFilteredImage,
  LoaderV2,
  NewPostContainerModal,
} from '@/components'

export const CreateNewPostModal = () => {
  const [addPost, { isLoading: isPostUploading }] = useAddPostMutation()
  // added additional indicator in order to inform user that everything is ok and request is processing now
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { step, initialStepWithValidation, stepForward, stepBackward, setPreferredStep } =
    useFileCreationWithSteps(0, addImage, { sizeLimit: 5 })

  const { _dispatch, _state } = useRtkStateHook()
  const { images: selectedImages, description: postDescription } = _state.slider

  const addNewPost = async () => {
    const formData = new FormData()

    setIsLoading(true)

    const imagePromises = selectedImages.map(async image => {
      const filteredImage = await getCroppedAndFilteredImage(image.url, null, image.filter)

      if (!filteredImage) {
        return null
      }

      const file = new File([filteredImage], image.url, {
        type: 'image/jpeg',
      })

      formData.append('images', file)

      return filteredImage
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
        setPreferredStep(2)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const interfaceVariants: { [Step: string]: ReactElement } = {
    1: <AddInterface callback={initialStepWithValidation} />,
    2: <CropInterface images={selectedImages} />,
    3: <FilterInterface images={selectedImages} />,
    4: <DescriptionInterface images={selectedImages} />,
  }

  const titleVariants: { [Step: string]: string } = {
    1: 'Add photo',
    2: 'Cropping',
    3: 'Filters',
    4: 'Publication',
  }

  const CurrentInterface: ReactElement = interfaceVariants[step]
  const currentTitle: string = titleVariants[step]

  const { isOpen: isCreatePostModalOpen, closeCreatePostModal: closeCreatePostModal } =
    useCreatePostModal()
  const {
    isOpen: isConfirmationModalOpen,
    onOpen: openConfirmationModal,
    onClose: closeConfirmationModal,
  } = useDisclose()

  const handleOutsideClick = (e: PointerDownOutsideEvent | FocusOutsideEvent) => {
    e.preventDefault()
    openConfirmationModal()
  }
  const onConfirm = () => {
    closeCreatePostModal()
    setPreferredStep(1)

    _dispatch(resetImagesToDefaultState())
  }

  return (
    <>
      <NewPostContainerModal open={isCreatePostModalOpen} onChange={closeCreatePostModal}>
        <NewPostContainerModal.Button asChild />
        <NewPostContainerModal.Content
          title={currentTitle}
          className={step < 3 ? s.content : s.filters}
          currentStep={step}
          onInteractOutside={handleOutsideClick}
          stepForward={stepForward}
          stepBackward={stepBackward}
          addNewPost={addNewPost}
        >
          {CurrentInterface}
        </NewPostContainerModal.Content>
      </NewPostContainerModal>

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
