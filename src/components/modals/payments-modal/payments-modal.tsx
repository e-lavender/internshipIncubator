import { Button, Modal, Typography } from '@/ui'
import s from './payments-modal.module.scss'
import { useTranslation } from '@/app'

type ModalProps = {
  isSuccess?: boolean
  isOpen: boolean
  onClose: () => void
}

export const PaymentsModal = ({ isSuccess, isOpen, onClose }: ModalProps) => {
  const { t } = useTranslation()

  const title = isSuccess ? 'Success' : 'Error'

  const content = isSuccess ? (
    <Typography variant={'regular-16'}>Payment was successful!</Typography>
  ) : (
    <Typography variant={'regular-16'}>Transaction failed. Please, write to support</Typography>
  )
  const titleForButton = isSuccess ? 'OK' : 'Back to payment'

  return (
    <Modal open={isOpen} onChange={onClose}>
      <Modal.Button asChild />
      <Modal.Content
        title={title}
        className={s.content}
        onInteractOutside={e => e.preventDefault()}
      >
        <Typography variant="regular-16">{content}</Typography>

        <div className={s.button}>
          <Button onClick={onClose}>{titleForButton} </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
