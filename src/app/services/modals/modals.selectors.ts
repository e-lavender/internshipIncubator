import { RootState } from '@/app/store/rtk.types'

export const selectCreatePostModalIsOpen = (state: RootState) => state.modals.createPostModal.isOpen
