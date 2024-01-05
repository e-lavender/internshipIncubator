import { ElementType, PropsWithChildren } from 'react'

import s from './post-card-modal.module.scss'

import { CloseIcon, useDisclose } from '@/app'
import { ConfirmationModal, LoaderV2, PostCardModalType } from '@/components'
import { Modal } from '@/ui'

export const PostCardModal = ({
  isOpen = false,
  onChange,
  isLoading = false,
  loaderLabel = 'Loading...',
  isModified = false,
  title,
  message,
  children,
}: PropsWithChildren<PostCardModalType>) => {
  const { isOpen: isModalOpen, onClose, onOpen } = useDisclose()

  const onConfirm = () => {
    onClose()
    onChange()
  }

  return (
    <>
      <Modal open={isOpen} onOpenChange={onChange}>
        <Modal.Content
          className={s.container}
          title={''}
          isModified={isModified}
          onInteractOutside={e => {
            e.preventDefault()
            onOpen()
          }}
        >
          {children}

          {isModified && <CloseIcon className={s.close} onClick={onOpen} />}
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isLoading} label={loaderLabel} />
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={onClose}
        onConfirmation={onConfirm}
        title={'Close Post'}
        message={
          'Do you really want to finish editing? If you close the changes you have made will not be saved.'
        }
      />
    </>
  )
}
