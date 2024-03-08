import { Button, Modal, Typography } from '@/ui'
import s from './payments-modal.module.scss'
import { useTranslation } from '@/app'

type ModalProps = {
  isSuccess?: string | true | string[] | undefined
  isOpen: boolean
  onClose: () => void
}

export const PaymentsModal = ({ isSuccess, isOpen, onClose }: ModalProps) => {
  const { t } = useTranslation()
  const { error, back, success, successful, failed } = t.paymentsModal

  const title = isSuccess ? success : error

  const content = isSuccess ? (
    <Typography variant={'regular-16'}>{successful}</Typography>
  ) : (
    <Typography variant={'regular-16'}>{failed}</Typography>
  )
  const titleForButton = isSuccess ? 'OK' : back

  return (
    <Modal open={isOpen} onChange={onClose}>
      <Modal.Button asChild />
      <Modal.Content
        title={title}
        className={s.content}
        onInteractOutside={e => e.preventDefault()}
      >
        <Typography variant="regular-16">{content}</Typography>

        <Button onClick={onClose} className={s.button} fullWidth>
          <Typography variant="h3"> {titleForButton}</Typography>
        </Button>
      </Modal.Content>
    </Modal>
  )
}
