import React, { ChangeEvent, FocusEvent, forwardRef, useCallback, useRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './custom-select.module.scss'

import { ChevronDown } from '@/app/assets/svg/chevron-down'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { useCustomSelect } from '@/ui/custom-select/useCustomSelect'

type PropsType = {
  label?: string
  options?: SelectValue[]
  value?: string
  onSelect?: (value: SelectValue | undefined) => void
  placeholder?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  setClear?: () => void
  isClearable?: boolean
}

export const CustomSelect = forwardRef<HTMLInputElement, PropsType>(
  ({ options, label, value, onSelect, placeholder, setClear, isClearable = false }, ref) => {
    const selectRef = useRef<HTMLDivElement>(null)
    const [filteredOptions, setFilteredOptions] = useState<SelectValue[] | undefined>(() => options)
    const { onHoverValue, isOpen, setIsOpen, onSelectValueHandler, currentValue, clearHandler } =
      useCustomSelect(onSelect)
    const styles = {
      options: clsx(s.options, isOpen && s.show),
      chevron: clsx(s.chevron, isOpen && s.open),
    }

    const onBlurHandler = (e: FocusEvent<HTMLDivElement>) => {
      if (!selectRef?.current?.contains(e.relatedTarget)) setIsOpen(false)
    }

    const inputFilterHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement>, options?: SelectValue[]) => {
        !isOpen && setIsOpen(true)
        if (options) {
          setFilteredOptions(
            options.filter(option => {
              return option.label.toLowerCase().includes(e.currentTarget.value.toLowerCase())
            })
          )
        }
      },
      [options]
    )

    return (
      <div className={s.container}>
        {label && <label className={s.label}>{label}</label>}
        <div
          className={s.select}
          tabIndex={0}
          onBlur={onBlurHandler}
          ref={selectRef}
          onClick={() => {
            !isOpen && setIsOpen(true)
          }}
        >
          {!isOpen && currentValue && <div className={s.input}>{currentValue}</div>}
          {(isOpen || !currentValue) && (
            <input
              placeholder={placeholder || 'Select...'}
              type={'text'}
              className={s.input}
              onChange={e => inputFilterHandler(e, options)}
              data-value={'Hello'}
              ref={ref}
            />
          )}
          {isClearable && (
            <>
              <button className={s['close-button']} onClick={clearHandler}>
                &times;
              </button>
              <div className={s.divider}></div>
            </>
          )}

          <button
            type={'button'}
            className={styles.chevron}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <ChevronDown />
          </button>
          <ul className={styles.options}>
            {options?.map((option, index) => {
              return (
                <li
                  className={s.option}
                  key={option.value + index}
                  onClick={() => onSelectValueHandler(option)}
                  onMouseEnter={() => onHoverValue(option)}
                >
                  {option.label}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
)
