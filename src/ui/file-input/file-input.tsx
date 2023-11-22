import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './file-input.module.scss'

type FileInputProps = {
  accept?: string | string[]
  label?: string
  className?: string
}

export const FileInput = forwardRef(
  (
    {
      accept,
      id = 'file-input',
      label = 'Select from Computer',
      name = 'file',
      disabled,
      className,
      ...props
    }: FileInputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof FileInputProps>,
    ref
  ) => {
    const fileFormat = Array.isArray(accept) ? accept.join(', ') : accept

    const styles = clsx(s.label, disabled && s.disabled, className)

    return (
      <form>
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
      </form>
    )
  }
)
