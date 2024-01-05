import { clsx } from 'clsx'

import s from './confirmation-modal.module.scss'

import { Button, Modal, Typography } from '@/ui'
import {useTranslation} from "@/app";

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
  const { t } = useTranslation()
  const {yes, no} =t.confirmationModal

  return (
    <div>
      <Modal open={isOpen} onOpenChange={onClose}>
        <Modal.Button asChild />
        <Modal.Content
          className={s.content}
          title={title}
          onInteractOutside={e => e.preventDefault()}
        >
          <Typography variant="regular-16">{message}</Typography>

          <div className={clsx(s.btns, btnsStyle)}>
            <Button onClick={onConfirm} variant={'outlined'}>
              {yes}
            </Button>
            <Button onClick={onClose}>{no} </Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}
