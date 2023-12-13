import { useState } from 'react'

import { SelectValue } from '@/ui/custom-select/custom-select.types'

export const useCustomSelect = (
  onSelect?: (value: SelectValue | undefined) => void,
  value?: SelectValue
) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(value?.label || '')
  const [hoveredValue, setHoveredValue] = useState<SelectValue | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const currentValue = value?.label || internalValue

  const onSelectValueHandler = (selectedValue: SelectValue | undefined) => {
    if (onSelect) {
      onSelect(selectedValue)
    }
    setInternalValue(selectedValue?.label)
    setIsOpen(false)
  }

  const onHoverValue = (value: SelectValue | undefined) => {
    value && setHoveredValue(value)
  }

  const clearHandler = () => {
    setInternalValue(undefined)
  }

  return {
    currentValue,
    setInternalValue,
    isOpen,
    setIsOpen,
    onSelectValueHandler,
    onHoverValue,
    clearHandler,
  }
}
