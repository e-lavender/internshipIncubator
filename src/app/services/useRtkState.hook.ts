import { useSelector } from 'react-redux'

import { RootState, useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

type CallbackType = (selector: RootState, equalityFn?: Function) => any
export const useRtkStateHook = () => {
  const _dispatch = useAppDispatch()
  const _state = useAppSelector(state => state)

  return { _state, _dispatch }
}
