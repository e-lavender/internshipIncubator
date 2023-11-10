import { toast } from 'react-toastify'

import { ErrorWithData } from '@/app'

export const showError = (error: ErrorWithData) => {
  if (typeof error.status === 'string') {
    return toast.error(error.status)
  }
  if (Array.isArray(error.data?.message)) {
    return toast.error(error.data.message[0].message)
  }
  if (typeof error.data?.message === 'string') {
    return toast.error(error.data.message)
  }
}
