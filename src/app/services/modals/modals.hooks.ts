import { selectCreatePostModalIsOpen } from '@/app/services/modals/modals.selectors'
import { setCreatePostModal } from '@/app/services/modals/modals.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

export const useCreatePostModal = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectCreatePostModalIsOpen)
  const openCreatePostModal = () => {
    dispatch(setCreatePostModal({ isOpen: true }))
  }
  const closeCreatePostModal = () => {
    dispatch(setCreatePostModal({ isOpen: false }))
  }

  return { isOpen, openCreatePostModal, closeCreatePostModal }
}
