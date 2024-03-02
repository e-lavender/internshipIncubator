import { ReactElement, useMemo, useState } from 'react'

import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'

import s from './create-new-post-modal.module.scss'

import { ErrorWithData, useDisclose, useFileCreationWithSteps, useTranslation } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { useCreatePostMutation, useUploadImagePostMutation } from '@/app/services/posts/posts.api'
import { CreatePostRequestChildrenMetadata } from '@/app/services/posts/posts.types'
import { addImage, resetImagesToDefaultState } from '@/app/services/posts/slider.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
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
  const [addPost, { isLoading: isPostUploading }] = useCreatePostMutation()

  const [uploadImages] = useUploadImagePostMutation()
  // added additional indicator in order to inform user that everything is ok and request is processing now
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { t } = useTranslation()
  const { add, cropping, filters, publication } = t.createPost
  const { step, initialStepWithValidation, stepForward, stepBackward, setPreferredStep } =
    useFileCreationWithSteps(0, addImage, { sizeLimit: 5 })

  const {
    images: selectedImages,
    description: postDescription,
    currentImageIndex,
  } = useAppSelector(state => state.slider)

  const dispatch = useAppDispatch()

  const addNewPost = async () => {
    const formData = new FormData()

    setIsLoading(true)

    const imagePromises = selectedImages.map(async image => {
      const filteredImage = await getCroppedAndFilteredImage({
        imageSrc: image.url,
        pixelCrop: null,
        filter: image.filter,
      })

      if (!filteredImage?.unit8array) return null

      const blob = new Blob([filteredImage.unit8array], { type: 'image/jpeg' })

      formData.append(`file`, blob)

      return filteredImage
    })

    await Promise.all(imagePromises)

    uploadImages(formData)
      .unwrap()
      .then(res => {
        const imagesMetaData: CreatePostRequestChildrenMetadata[] = []

        res.images.map(image => {
          imagesMetaData.push({ uploadId: image.uploadId })
        })

        addPost({ description: postDescription, childrenMetadata: imagesMetaData })
        dispatch(resetImagesToDefaultState())
      })
      .catch((error: ErrorWithData) => {
        showError(error)
        setPreferredStep(2)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const interfaceVariants: { [Step: string]: ReactElement } = useMemo(() => {
    return {
      1: <AddInterface callback={initialStepWithValidation} />,
      2: <CropInterface images={selectedImages} />,
      3: <FilterInterface images={selectedImages} />,
      4: <DescriptionInterface images={selectedImages} />,
    }
  }, [selectedImages])

  const titleVariants: { [Step: string]: string } = useMemo(() => {
    return {
      1: add,
      2: cropping,
      3: filters,
      4: publication,
    }
  }, [])

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

    dispatch(resetImagesToDefaultState())
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
        title={'Close create posts'}
        message={'Are you sure you want to close ?'}
        onConfirmation={onConfirm}
      />

      <LoaderV2 isLoading={isLoading || isPostUploading} label={'Saving...'} />
    </>
  )
}

export default CreateNewPostModal
