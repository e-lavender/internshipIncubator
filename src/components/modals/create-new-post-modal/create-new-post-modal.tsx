import React from 'react'

import s from './create-new-post-modal.module.scss'

import { AccountIcon } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { Button, Modal } from '@/ui'
const CreateNewPostModal = () => {
  const { isOpen, closeCreatePostModal: close } = useCreatePostModal()

  return (
    <Modal open={isOpen} onChange={close}>
      <Modal.Button asChild />
      <Modal.Content title={'Add Photo'} className={s.content}>
        <div className={s.loopBackImg}>
          <AccountIcon />
        </div>
        <div className={s.buttons}>
          <Button onClick={() => {}} variant={'primary'}>
            {'Select from computer'}
          </Button>
          <Button variant={'outlined'} onClick={() => {}}>
            {'Open draft'}
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default CreateNewPostModal
