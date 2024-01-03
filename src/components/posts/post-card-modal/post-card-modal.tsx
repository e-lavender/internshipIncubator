import { ElementType, PropsWithChildren } from 'react'

import s from './post-card-modal.module.scss'

import { LoaderV2, PostCardModalType } from '@/components'
import { Modal } from '@/ui'

export const PostCardModal = ({
  isOpen = false,
  onChange,
  currentInterface,
  isLoading = false,
  loaderLabel = 'Loading...',
  isModified = false,
  children,
}: PropsWithChildren<PostCardModalType>) => {
  const Component: ElementType = currentInterface

  return (
    <>
      <Modal open={isOpen} onOpenChange={onChange}>
        <Modal.Content
          className={s.container}
          title={''}
          isModified={isModified}
          onInteractOutside={e => e.preventDefault()}
        >
          {children}

          <Component />
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isLoading} label={loaderLabel} />
    </>
  )
}
