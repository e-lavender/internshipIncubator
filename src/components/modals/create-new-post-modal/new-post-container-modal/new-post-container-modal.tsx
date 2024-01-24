import React, { ReactElement, ReactNode } from 'react'

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
  currentStep: number
  children: ReactNode
  className?: string
  onInteractOutside?: (event: PointerDownOutsideEvent | FocusOutsideEvent) => void
  stepForward: () => void
  stepBackward: () => void
  addNewPost: () => void
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
  currentStep,
  stepForward,
  stepBackward,
  addNewPost,
  className,
  children,
  ...props
}: ModalContentProps) => {
  const styles = clsx(s.main, className)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay}>
        <Dialog.Content className={s.content} {...props}>
          <div className={s.header}>
            {currentStep > 1 && (
              <button onClick={stepBackward} tabIndex={0}>
                <ArrowBackIcon />
              </button>
            )}

            <Typography as={'h1'} variant={'h1'} className={s.title}>
              {title}
            </Typography>

            {currentStep === 1 && (
              <Dialog.Close aria-label="Close" tabIndex={0}>
                <CloseIcon />
              </Dialog.Close>
            )}

            {(currentStep === 2 || currentStep === 3) && (
              <Button variant={'link'} onClick={stepForward} tabIndex={0}>
                Next
              </Button>
            )}

            {currentStep === 4 && (
              <Dialog.Close onClick={addNewPost} tabIndex={0}>
                <Typography as={'h3'} variant={'h3'} className={s.publish}>
                  Publish
                </Typography>
              </Dialog.Close>
            )}
          </div>

          <div className={s.separator}></div>

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
