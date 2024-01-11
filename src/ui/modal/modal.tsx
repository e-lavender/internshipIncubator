import React, { ReactNode, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { CloseIcon } from '@/app/assets/svg'
import { SelectedImages } from '@/components/filters/selected-images/selected-images'
import FiltersModal from '@/components/modals/filters-modal/filters-modal'
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
  isCrop?: boolean
  onClose?: () => void
}
export const Modal = ({ open, onChange, children }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      {children}
    </Dialog.Root>
  )
}

const ModalContent = ({
  title,
  isModified = false,
  isCrop,
  onClose,
  className,
  children,
  ...props
}: ModalContentProps) => {
  const styles = clsx(s.main, className)
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay}>
        <Dialog.Content className={s.content} {...props}>
          {!isModified && (
            <>
              <div className={s.header}>
                <Dialog.Title>
                  <Typography className={s.title} variant="h1">
                    {title}
                  </Typography>
                </Dialog.Title>

                <Dialog.Close aria-label="Close" className={s.close} onClick={onClose}>
                  {!isCrop ? (
                    <CloseIcon />
                  ) : (
                    <Button variant={'link'} onClick={() => {}}>
                      {'Next'}
                    </Button>
                  )}
                </Dialog.Close>
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

Modal.Button = Dialog.Trigger
Modal.Close = Dialog.Close
Modal.Content = ModalContent
