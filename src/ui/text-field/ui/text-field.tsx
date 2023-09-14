import { forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { INPUT_TYPES } from '../lib/constants/input-type-enum'
import s from '../lib/styles/text-field.module.scss'
import { InputProps } from '../model/text-field-types'

import { HideIcon, SearchIcon, ShowIcon } from '@/app/assets/svg'
import { Typography } from '@/ui/typography/typography'

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, inputType = 'text', disabled, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const classNames = {
      root: clsx(s.root, className, disabled && s.disabled),
      label: clsx(s.label),
      container: clsx(s.inputContainer),
      leftIcon: clsx(s.leftIcon),
      input: clsx(s.input, s[`${inputType}`], error && s.inputError),
      rightIcon: clsx(s.rightIcon),
      error: clsx(s.error),
    }

    const showHidePassword = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    const rightIcon = inputType === INPUT_TYPES.PASSWORD && (
      <button className={s.rightIcon} disabled={disabled} onClick={showHidePassword}>
        {showPassword ? <HideIcon /> : <ShowIcon />}
      </button>
    )

    const leftIcon = inputType === INPUT_TYPES.SEARCH && (
      <div id={'left-icon'} className={classNames.leftIcon}>
        {<SearchIcon />}
      </div>
    )
    const type = showPassword && inputType === INPUT_TYPES.PASSWORD ? INPUT_TYPES.TEXT : inputType

    return (
      <div className={classNames.root}>
        <Typography className={classNames.label}>{label}</Typography>
        <div className={classNames.container}>
          <input
            aria-label={label}
            disabled={disabled}
            className={classNames.input}
            type={type}
            ref={ref}
            {...rest}
          />
          {leftIcon}
          {rightIcon}
        </div>
        <Typography className={classNames.error}>{error}</Typography>
      </div>
    )
  }
)
