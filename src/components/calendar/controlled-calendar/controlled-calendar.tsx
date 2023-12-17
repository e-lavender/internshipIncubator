import { RefObject } from 'react'

import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { Calendar, CalendarProps } from '@/components'

type Props<T extends FieldValues> = {
  inputRef?: RefObject<HTMLInputElement>
} & UseControllerProps<T> &
  Omit<CalendarProps, 'value' | 'onChange' | 'id'>
export const ControlledCalendar = ({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  inputRef,
  ...calendarProps
}: Props<FieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return <Calendar {...{ id: name, value, onChange, ref: inputRef, ...calendarProps }} />
}
