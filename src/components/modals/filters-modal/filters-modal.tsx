import React, { ComponentProps, ReactNode, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
//import ArrowBackIcon from 'public/icon/arrowBackIcon.svg'

import s from './filters-modal.module.scss'

import { FilteredImages } from '@/components/filters/filtered-images/filtered-images'
import { filteredImg } from '@/components/filters/hooks/useFilters'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { AddDescriptionModal } from '@/components/post-descrition/add-description/add-description'
import { PostDescription } from '@/components/post-descrition/post-description'
import { Button, Typography } from '@/ui'

export type ModalProps = {
  image?: string
  isModalOpen: boolean
  onClose?: () => void
  onAction?: () => void
  onCancel?: () => void
  cancelButtonName?: string // if no props , visibility = hidden
  actionButtonName?: string // if no props , visibility = hidden
  showSeparator?: boolean // if no props with false , visibility = visible
  title?: string
  children?: ReactNode
  className?: string
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  activeFilter: string
  setActiveFilter: (activeFilter: string) => void
  setIsBaseModalOpen: (isBaseModalOpen: boolean) => void
  setImage: (image: string | undefined) => void
  openSureModal: boolean
  setOpenSureModal: (openSureModal: boolean) => void
  setIsModalOpen: (open: boolean) => void
  isFiltersModalOpen: boolean
  setIsFiltersModalOpen: (isFiltersModalOpen: boolean) => void
} & ComponentProps<'div'>

const FiltersModal = ({
  image,
  showSeparator = true,
  onAction,
  onCancel,
  isModalOpen,
  cancelButtonName,
  actionButtonName,
  title,
  className,
  children,
  addedImages,
  setAddedImages,
  activeFilter,
  setActiveFilter,
  setOpenSureModal,
  setIsBaseModalOpen,
  setIsModalOpen,
  isFiltersModalOpen,
  setIsFiltersModalOpen,
}: ModalProps) => {
  const classNames = {
    content: getContentClassName(className),
    separator: clsx(s.separator, !showSeparator && s.separatorHide),
    actionButton: clsx(s.widePaddingButton, !actionButtonName && s.actionButtonHide),
    cancelButton: clsx(
      s.widePaddingButton,
      !cancelButtonName && s.cancelButtonHide,
      s.actionButton
    ),
  }
  //const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false)
  const [value, setValue] = useState('')

  console.log(isFiltersModalOpen)
  //const [addPost] = useAddPostMutation()
  const actionButtonHandler = () => {
    onAction?.()
  }
  const cancelButtonHandler = () => {
    onCancel?.()
  }

  function onBackHandler() {
    setIsFiltersModalOpen(false)
    setIsModalOpen(true)
  }

  const handleNext = () => {
    setIsFiltersModalOpen(true)
    // setIsBaseModalOpen(false)
    //setIsModalOpen(false)
  }

  const formData = new FormData()

  /*const sendFilteredImg = async (activeFilter: string) => {
    const updatedImages = await Promise.all(
      addedImages.map(async (el, idx) => {
        const filteredImage = await filteredImg(el.image, activeFilter)

        if (!filteredImage) {
          return null
        }
        const file = new File([filteredImage], el.fileName ? el.fileName : '', {
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
        //setAddedImages(updatedImages)
        setActiveFilter('')
        setIsFiltersModalOpen(false)
        setIsDescriptionModalOpen(false)
        setIsModalOpen(false)
      })
  }
*/
  return (
    <div>
      <Button variant="link" className={s.nextButton} onClick={handleNext}>
        {'next'}
      </Button>
      <Dialog open={isFiltersModalOpen} onOpenChange={open => !open && setOpenSureModal(true)}>
        <DialogPortal>
          <DialogOverlay className={s.DialogOverlay} />
          <DialogContent className={classNames.content}>
            <div className={s.titleWrapper}>
              {/* <button className={s.arrowButton} onClick={onBackHandler}>
                <ArrowBackIcon />
              </button>*/}
              <div className={s.next}>
                <AddDescriptionModal
                  image={image}
                  addedImages={addedImages}
                  setAddedImages={setAddedImages}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  onCancel={cancelButtonHandler}
                  title={'publication'}
                  isFiltersModalOpen={isFiltersModalOpen}
                  setIsFiltersModalOpen={setIsFiltersModalOpen}
                  setOpenSureModal={setOpenSureModal}
                  isDescriptionModalOpen={isDescriptionModalOpen}
                  setIsDescriptionModalOpen={setIsDescriptionModalOpen}
                  /*sendFilteredImg={sendFilteredImg}*/
                >
                  <FilteredImages addedImages={addedImages} activeFilter={activeFilter} />
                  <PostDescription value={value} setValue={setValue} addedImages={addedImages} />
                </AddDescriptionModal>
              </div>

              <DialogTitle className={s.DialogTitle}>
                <Typography variant={'h1'}>{title}</Typography>
              </DialogTitle>
            </div>
            <div className={s.contentBox}>{children}</div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  )
}

function getContentClassName(className?: string) {
  return clsx(className, s.DialogContent)
}

export default FiltersModal
