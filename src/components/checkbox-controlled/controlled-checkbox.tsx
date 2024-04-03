import { ReactNode } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@flyingtornado06/ui-kit'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  labelTitle?: ReactNode | string
  left?: boolean
  required?: boolean
}

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> & CheckboxProps

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
