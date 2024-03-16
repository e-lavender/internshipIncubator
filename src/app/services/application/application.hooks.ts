import {
  selectLoadingSpinnerIsLoading,
  selectLoadingSpinnerMessage,
} from '@/app/services/application/application.selectors'
import {
  clearLoadingSpinner,
  setLoadingSpinnerIsLoading,
  setLoadingSpinnerMessage,
} from '@/app/services/application/application.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

export const useLoadingSpinner = () => {
  const isLoading = useAppSelector(selectLoadingSpinnerIsLoading)
  const message = useAppSelector(selectLoadingSpinnerMessage)
  const dispatch = useAppDispatch()
  const setIsLoading = ({ isLoading }: { isLoading: boolean }) => {
    dispatch(setLoadingSpinnerIsLoading({ isLoading }))
  }
  const setMessage = ({ message }: { message: string }) => {
    dispatch(setLoadingSpinnerMessage({ message }))
  }
  const setLoadingSpinner = ({ isLoading, message }: { isLoading: boolean; message: string }) => {
    setIsLoading({ isLoading })
    setMessage({ message })
  }

  const stopLoading = () => {
    dispatch(clearLoadingSpinner())
  }

  return { isLoading, message, setIsLoading, setLoadingSpinner, setMessage, stopLoading }
}
