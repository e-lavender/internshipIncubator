import React, { FocusEvent, useEffect, useRef } from 'react'

import { clsx } from 'clsx'

import s from './custom-select.module.scss'

import { ChevronDown } from '@/app/assets/svg/chevron-down'
import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { useCustomSelect } from '@/ui/custom-select/useCustomSelect'
import { useFilterOptions } from '@/ui/custom-select/useFilterOptions'
import { useFindNext } from '@/ui/custom-select/useFindNext'

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
  const inputRef = useRef<HTMLInputElement>(null)
  const optionsListRef = useRef<HTMLUListElement>(null)

  const {
    hoveredValue,
    onHoverValue,
    isOpen,
    setIsOpen,
    onSelectValueHandler,
    currentValue,
    clearHandler,
  } = useCustomSelect(onSelect)

  const { filteredData, setFilterHandler, resetFilter } = useFilterOptions(options || [])

  const { findUp, findDown, indexCurrent, setIndexCurrent } = useFindNext(filteredData?.length)

  const styles = {
    options: clsx(s.options, isOpen && s.show),
    chevron: clsx(s.chevron, isOpen && s.open),
  }

  const closeSelectOnBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!selectRef?.current?.contains(e.relatedTarget)) setIsOpen(false)
  }
  const keyHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.code) {
      case 'Space':
        setIsOpen(!isOpen)
        inputRef.current?.focus()
        break
      case 'ArrowUp':
        {
          findUp()
          e.preventDefault()
        }
        break
      case 'ArrowDown':
        {
          findDown()
          e.preventDefault()
        }
        break
      case 'Enter' || 'NumpadEnter':
        onSelectValueHandler(filteredData[indexCurrent])
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (optionsListRef.current && indexCurrent !== undefined) {
      const listElement = optionsListRef.current
      const selectedElement = listElement.children[indexCurrent] as HTMLLIElement

      if (selectedElement) {
        const listHeight = listElement.clientHeight
        const selectedElementTop = selectedElement.offsetTop
        const selectedElementHeight = selectedElement.clientHeight

        if (selectedElementTop < listElement.scrollTop) {
          listElement.scrollTop = selectedElementTop
        } else if (
          selectedElementTop + selectedElementHeight >
          listElement.scrollTop + listHeight
        ) {
          listElement.scrollTop = selectedElementTop + selectedElementHeight - listHeight
        }
      }
    }
  }, [indexCurrent, filteredData])

  return (
    <div className={s.container}>
      {label && <label className={s.label}>{label}</label>}
      <div
        className={s.select}
        tabIndex={0}
        onBlur={closeSelectOnBlur}
        ref={selectRef}
        onKeyDown={keyHandler}
        onClick={() => {
          !isOpen && setIsOpen(true)
        }}
      >
        {!isOpen && (value || currentValue) && (
          <div className={s.input}>{value || currentValue}</div>
        )}
        {(isOpen || !currentValue) && (
          <input
            tabIndex={-1}
            placeholder={placeholder || 'Select...'}
            type={'text'}
            className={s.input}
            onChange={e => {
              setIsOpen(true)
              setFilterHandler(e)
            }}
            ref={inputRef}
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
        <ul className={styles.options} ref={optionsListRef}>
          {filteredData?.map((option, index) => {
            return (
              <li
                className={clsx(s.option, index === indexCurrent && s.hovered)}
                key={index}
                onClick={() => {
                  onSelectValueHandler(option)
                  resetFilter()
                }}
                onMouseEnter={() => setIndexCurrent(index)}
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
