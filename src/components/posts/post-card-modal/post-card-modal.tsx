import { PropsWithChildren, ReactElement } from 'react'

import s from './post-card-modal.module.scss'

import { LoaderV2 } from '@/components'
import { Modal } from '@/ui'

type PostCardModalType = {
  isOpen: boolean
  onChange: () => void
  currentInterface?: ReactElement
  isLoading?: boolean
}

export const PostCardModal = ({
  isOpen = false,
  onChange,
  currentInterface,
  isLoading = false,
  children,
}: PropsWithChildren<PostCardModalType>) => {
  return (
    <>
      <Modal open={isOpen} onOpenChange={onChange}>
        <Modal.Content
          className={s.container}
          title={''}
          onInteractOutside={e => e.preventDefault()}
        >
          {children}
          {currentInterface}
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isLoading} label={'Loading...'} />
    </>
  )
}
