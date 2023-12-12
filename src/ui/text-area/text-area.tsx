import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './text-area.module.scss'

import { Typography } from '@/ui'

type TextAreaType = {
  label?: string
  error?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>(
  ({ label, error, disabled, spellCheck = false, ...props }, ref) => {
    const styles = {
      container: clsx(s.container, disabled && s.disabled),
      label: clsx(s.label, disabled && s.disabled),
      textarea: clsx(s.textarea, disabled && s.disabled, error && s.warning),
    }

    return (
      <div className={s.container}>
        {label && (
          <Typography as={'p'} variant={'regular-14'} className={styles.label}>
            {label}
          </Typography>
        )}

        <textarea
          className={styles.textarea}
          disabled={disabled}
          spellCheck={spellCheck}
          ref={ref}
          {...props}
        />

        {error && (
          <Typography as={'p'} variant={'regular-14'} className={s.error}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
