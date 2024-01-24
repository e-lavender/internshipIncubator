import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField } from '@/ui'
import { InputProps } from '@/ui/text-field/model/text-field-types'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value' | 'id'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return <TextField {...field} id={name} error={error?.message} {...rest} />
}
