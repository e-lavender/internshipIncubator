import { forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from '../lib/styles/text-field.module.scss'
import { InputProps } from '../model/text-field-types'

import { HideIcon, SearchIcon, ShowIcon } from '@/app/assets/svg'

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, inputType, disabled, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const classNames = {
      input: clsx(s.input, s[`${inputType}`], error && s.inputError),
      container: clsx(s.inputContainer),
      root: clsx(s.root, className, disabled && s.disabled),
      leftIcon: clsx(s.leftIcon),
      rightIcon: clsx(s.rightIcon),
      error: clsx(s.error),
      title: clsx(s.title),
    }

    const showHidePassword = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    const rightIcon = inputType === 'password' && (
      <button className={s.rightIcon} onClick={showHidePassword}>
        {showPassword && !disabled ? <HideIcon /> : <ShowIcon />}
      </button>
    )

    const leftIcon = inputType === 'search' && (
      <div className={classNames.leftIcon}>{<SearchIcon />}</div>
    )

    return (
      <div className={classNames.root}>
        <div className={classNames.title}>{title}</div>
        <div className={classNames.container}>
          {leftIcon}
          <input
            ref={ref}
            disabled={disabled}
            className={classNames.input}
            type={inputType}
            {...rest}
          />
          {rightIcon}
        </div>
        <div className={classNames.error}>{error}</div>
      </div>
    )
  }
)
