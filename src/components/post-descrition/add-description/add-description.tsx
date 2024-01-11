import React, { ComponentProps, ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
//import ArrowBackIcon from 'public/icon/arrowBackIcon.svg'

import { Image } from '../../CreateNewPost'

import s from './add-description.module.scss'

import { ImageModel } from '@/components/image-slider/image-slider-types'
import { Button, Typography } from '@/ui'

export type ModalProps = {
  image?: string
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  isFiltersModalOpen: boolean
  setIsFiltersModalOpen: (isFiltersModalOpen: boolean) => void
  onClose?: () => void
  onAction?: () => void
  onCancel?: () => void
  activeFilter: string
  setActiveFilter: (activeFilter: string) => void
  cancelButtonName?: string // if no props , visibility = hidden
  actionButtonName?: string // if no props , visibility = hidden
  showSeparator?: boolean // if no props with false , visibility = visible
  title?: string
  children?: ReactNode
  className?: string
  setOpenSureModal: (openSureModal: boolean) => void
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  sendFilteredImg?: (activeFilter: string) => void
  isDescriptionModalOpen: boolean
  setIsDescriptionModalOpen: (isDescriptionModalOpen: boolean) => void
} & ComponentProps<'div'>

export const AddDescriptionModal = ({
  activeFilter,
  setIsFiltersModalOpen,
  showSeparator = true,
  cancelButtonName,
  actionButtonName,
  title,
  className,
  children,
  setOpenSureModal,
  sendFilteredImg,
  setIsDescriptionModalOpen,
  isDescriptionModalOpen,
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

  const handleBackClick = () => {
    setIsDescriptionModalOpen(false)
    setIsFiltersModalOpen(true)
  }

  const handlePublish = () => {
    setIsDescriptionModalOpen(true)
  }

  return (
    <div>
      <Button variant="link" className={s.nextButton} onClick={handlePublish}>
        {'next'}
      </Button>
      <Dialog open={isDescriptionModalOpen} onOpenChange={open => !open && setOpenSureModal(true)}>
        <DialogPortal>
          <DialogOverlay className={s.DialogOverlay} />
          <DialogContent className={classNames.content}>
            <div className={s.titleWrapper}>
              {/* <button className={s.arrowButton} onClick={handleBackClick}>
                <ArrowBackIcon />
              </button>*/}

              <DialogTitle className={s.DialogTitle}>
                <Typography variant={'h1'}>{title}</Typography>
              </DialogTitle>
              <div className={s.next}>
                <Button
                  variant="link"
                  className={s.nextButton}
                  onClick={() => sendFilteredImg(activeFilter)}
                >
                  {'publish'}
                </Button>
              </div>
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
