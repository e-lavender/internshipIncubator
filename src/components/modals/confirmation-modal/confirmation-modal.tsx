import { clsx } from 'clsx'

import s from './confirmation-modal.module.scss'

import { useTranslation } from '@/app'
import { Button, Modal, Typography } from '@/ui'

type ModalProps = {
  title?: string
  message?: string
  isOpen: boolean
  onClose: () => void
  confirmBtnLabel?: string
  declineBtnLabel?: string
  btnsStyle?: string
  onConfirmation: () => void
}
export const ConfirmationModal = ({
  title,
  message,
  isOpen,
  onClose,
  confirmBtnLabel,
  declineBtnLabel,
  btnsStyle,
  onConfirmation,
}: ModalProps) => {
  const onConfirm = () => {
    onConfirmation()
    onClose()
  }

  return (
    <Modal open={isOpen} onChange={onClose}>
      <Modal.Button asChild />
      <Modal.Content
        className={clsx(s.content, isOpen && s.visible)}
        title={title}
        onInteractOutside={e => e.preventDefault()}
      >
        <Typography variant="regular-16">{message}</Typography>

        <div className={clsx(s.btns, btnsStyle)}>
          <Button onClick={onConfirm} variant={'outlined'}>
            {confirmBtnLabel}
          </Button>
          <Button onClick={onClose}>{declineBtnLabel} </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
