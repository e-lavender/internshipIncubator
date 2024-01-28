import { PropsWithChildren } from 'react'

import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import { clsx } from 'clsx'

import s from './post-card-modal.module.scss'

import { CloseIcon, useDisclose, useRtkStateHook } from '@/app'
import { resetDescriptionState, setViewMode } from '@/app/services/post/post.slice'
import { ConfirmationModal, LoaderV2, PostCardModalType } from '@/components'
import { Modal } from '@/ui'

export const PostCardModal = ({
  isOpen = false,
  onChange: closeCardModal,
  isLoading = false,
  loaderLabel = 'Loading...',
  isModified = false,
  askConfirmation = false,
  title,
  message,
  children,
}: PropsWithChildren<PostCardModalType>) => {
  const {
    isOpen: shouldConfirmAction,
    onClose: closeConfirmationModal,
    onOpen: openConfirmationModal,
  } = useDisclose(askConfirmation)

  const { _dispatch, _state } = useRtkStateHook()
  const { mode, isEdited } = _state.post
  const reset = () => _dispatch(resetDescriptionState())
  const handleConfirmation = () => {
    _dispatch(setViewMode())
    reset()

    closeConfirmationModal()
    closeCardModal()
  }

  const closeMainModal = () => {
    if (!isEdited) {
      _dispatch(setViewMode())

      return closeCardModal()
    }

    if (mode === 'edit') {
      return openConfirmationModal()
    }

    closeCardModal()
  }

  const handleCloseClick = shouldConfirmAction ? openConfirmationModal : closeMainModal

  const handleOutsideClick = (e: PointerDownOutsideEvent | FocusOutsideEvent) => {
    e.preventDefault()

    if (isEdited) {
      return openConfirmationModal()
    }

    if (mode === 'edit') {
      _dispatch(setViewMode())

      return closeCardModal()
    }

    closeCardModal()
  }

  return (
    <>
      <Modal open={isOpen}>
        <Modal.Content
          className={clsx(s.container, !isModified && s.containerV2)}
          title={isModified ? '' : 'Edit Post'}
          isModified={isModified}
          onInteractOutside={handleOutsideClick}
          onClose={handleCloseClick}
        >
          {children}

          {isModified && <CloseIcon className={s.close} onClick={handleCloseClick} />}
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isLoading} label={loaderLabel} />
      <ConfirmationModal
        isOpen={shouldConfirmAction}
        onClose={closeConfirmationModal}
        translation={'closePost'}
        title={title}
        message={message}
        onConfirmation={handleConfirmation}
      />
    </>
  )
}
