import { CloseButtonProps } from 'react-toastify'

import s from './close-button.module.scss'

import { CloseIcon } from '@/app/assets/svg'
export const LoseButton = ({ closeToast }: CloseButtonProps) => (
  <button onClick={closeToast} type={'button'} className={s.closeButton}>
    <CloseIcon />
  </button>
)
