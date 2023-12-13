import React, {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { clsx } from 'clsx'

import s from './custom-select.module.scss'

import { ChevronDown } from '@/app/assets/svg/chevron-down'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { useCustomSelect } from '@/ui/custom-select/useCustomSelect'
import { useFilterOptions } from '@/ui/custom-select/useFilterOptions'

export const CustomSelect = ({
  options,
  label,
  value,
  onSelect,
  placeholder,
  setClear,
  isClearable = false,
}: {
  label?: string
  options?: SelectValue[]
  value?: string
  onSelect?: (value: SelectValue | undefined) => void
  placeholder?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  setClear?: () => void
  isClearable?: boolean
}) => {
  const selectRef = useRef<HTMLDivElement>(null)
  const { onHoverValue, isOpen, setIsOpen, onSelectValueHandler, currentValue, clearHandler } =
    useCustomSelect(onSelect)
  const { filteredData, setFilterHandler } = useFilterOptions(options || [])

  const styles = {
    options: clsx(s.options, isOpen && s.show),
    chevron: clsx(s.chevron, isOpen && s.open),
  }

  const closeSelectOnBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!selectRef?.current?.contains(e.relatedTarget)) setIsOpen(false)
  }

  return (
    <div className={s.container}>
      {label && <label className={s.label}>{label}</label>}
      <div
        className={s.select}
        tabIndex={0}
        onBlur={closeSelectOnBlur}
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
            onChange={e => {
              setIsOpen(true)
              setFilterHandler(e)
            }}
            data-value={'Hello'}
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
          className={styles.chevron}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <ChevronDown />
        </button>
        <ul className={styles.options}>
          {filteredData?.map((option, index) => {
            return (
              <li
                className={s.option}
                key={index}
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
