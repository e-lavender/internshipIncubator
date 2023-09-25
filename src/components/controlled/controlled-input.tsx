import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField } from '@/ui/text-field'
import { InputProps } from '@/ui/text-field/model/text-field-types'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  className,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <TextField error={error?.message} className={className} {...field} {...rest} />
}
