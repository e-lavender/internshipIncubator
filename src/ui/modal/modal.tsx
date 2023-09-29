import React, { ReactNode, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { CloseIcon } from '@/app/assets/svg'
import { Typography } from '@/ui'

type ModalProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}
type ModalContentProps = {
  title?: string
  children: ReactNode
  className?: string
}
export const Modal = ({ open, onOpenChange, children }: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

const ModalContent = ({ title, children, className }: ModalContentProps) => {
  const classNames = {
    main: clsx(s.main, className),
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <div className={s.header}>
          <Dialog.Title>
            <Typography className={s.title} variant="h1">
              {title}
            </Typography>
          </Dialog.Title>
          <Dialog.Close aria-label="Close" className={s.close}>
            <CloseIcon />
          </Dialog.Close>
        </div>
        <div className={s.separator}></div>
        <div className={classNames.main}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

Modal.Button = Dialog.Trigger
Modal.Close = Dialog.Close
Modal.Content = ModalContent
