import React, { ReactNode } from 'react'

import s from './notification-modal.module.scss'

import { Button, Modal, Typography } from '@/ui'

type Props = {
  message?: string
  showModal?: boolean
  trigger?: ReactNode
  onOpen?: (open: boolean) => void
  isOpen: boolean
  onClose?: () => void
}
export const NotificationModal = ({ trigger, message, isOpen, onOpen, onClose }: Props) => {
  return (
    <div>
      <Modal open={isOpen} onOpenChange={onOpen}>
        {trigger && <Modal.Button asChild>{trigger}</Modal.Button>}
        <Modal.Content className={s.content} title="Email sent">
          <Typography variant="regular-16">{message}</Typography>
          <div className={s.confirm}>
            <Button onClick={onClose}>Ok</Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}
