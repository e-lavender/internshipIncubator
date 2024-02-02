import { Dispatch, SetStateAction } from 'react'

export type SelectValue = { value: string; label: string }
export type CustomSelectProps = {
  value?: string
  label?: string
  options?: SelectValue[]
  setClear?: () => void
  isClearable?: boolean
  placeholder?: string
  onChange?: (value: string | undefined) => void
  isLoading?: boolean
  disabled?: boolean
}
export type OptionsProps = {
  resetFilter: () => void
  onSelectValueHandler: (value: string | undefined) => void
  items: SelectValue[]
  isOpen: boolean
  setIndexCurrent: Dispatch<SetStateAction<number>>
  indexCurrent: number
}
