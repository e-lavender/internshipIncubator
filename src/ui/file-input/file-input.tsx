import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './file-input.module.scss'

type FileInputProps = {
  accept?: string | string[]
  label?: string
  className?: string
}

type CustomFileInputType = FileInputProps &
  Omit<ComponentPropsWithoutRef<'input'>, keyof FileInputProps>

export const FileInput = forwardRef<HTMLFormElement, CustomFileInputType>(
  (
    {
      accept,
      id = 'file-input',
      label = 'Select from Computer',
      name = 'file',
      disabled,
      className,
      children,
      ...props
    }: CustomFileInputType,
    ref
  ) => {
    const fileFormat = Array.isArray(accept) ? accept.join(', ') : accept

    const styles = clsx(s.label, disabled && s.disabled, className)

    return (
      <form ref={ref}>
        <label className={styles} htmlFor={id}>
          {label}
        </label>
        <input
          className={s.input}
          type="file"
          id={id}
          name={name}
          accept={fileFormat}
          disabled={disabled}
          {...props}
        />
        {children}
      </form>
    )
  }
)
