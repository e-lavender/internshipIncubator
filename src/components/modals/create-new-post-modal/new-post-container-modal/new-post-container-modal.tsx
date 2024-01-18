import React, { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import { clsx } from 'clsx'

import s from './new-post-container-modal.module.scss'

import { BackToPreviousIcon, CloseIcon } from '@/app'
import { ArrowBackIcon } from '@/app/assets/svg/arrow-back-icon'
import { Button, Typography } from '@/ui'

type ModalProps = {
  open?: boolean
  onChange?: (open: boolean) => void

  children: ReactNode
}
type ModalContentProps = {
  title?: string
  children: ReactNode
  className?: string
  onInteractOutside?: (event: PointerDownOutsideEvent | FocusOutsideEvent) => void
  isModified?: boolean
  withCropper?: boolean
  withFilter?: boolean
  lastModal?: boolean
  onClose?: () => void
  stepForward?: () => void
  stepBack?: () => void
  addNewPost?: (activeFilter: string) => void
  activeFilter?: string
}

export const NewPostContainerModal = ({ open, onChange, children }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      {children}
    </Dialog.Root>
  )
}

const ModalContent = ({
  title,
  isModified = false,
  withCropper,
  withFilter,
  lastModal,
  stepForward,
  stepBack,
  addNewPost,
  activeFilter,
  onClose,
  className,
  children,
  ...props
}: ModalContentProps) => {
  const styles = clsx(s.main, className)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay}>
        <Dialog.Content className={s.content} {...props}>
          {!isModified && (
            <>
              <div className={s.header}>
                {withCropper || withFilter || lastModal ? (
                  <button onClick={stepBack}>
                    <ArrowBackIcon />
                  </button>
                ) : (
                  ''
                )}

                <Dialog.Title>
                  <Typography className={s.title} variant="h1">
                    {title}
                  </Typography>
                </Dialog.Title>

                {withCropper || withFilter ? (
                  <Button variant={'link'} onClick={stepForward}>
                    {'Next'}
                  </Button>
                ) : (
                  <Dialog.Close aria-label="Close" className={s.close}>
                    {!lastModal ? (
                      <CloseIcon width={24} height={24} onClick={onClose} />
                    ) : (
                      <Button
                        variant={'link'}
                        onClick={() => addNewPost && addNewPost(activeFilter ? activeFilter : '')}
                      >
                        {'Publish'}
                      </Button>
                    )}
                  </Dialog.Close>
                )}
              </div>

              <div className={s.separator}></div>
            </>
          )}

          <div className={styles}>{children}</div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}

NewPostContainerModal.Root = Dialog.Root
NewPostContainerModal.Button = Dialog.Trigger
NewPostContainerModal.Close = Dialog.Close
NewPostContainerModal.Content = ModalContent
