import React, { ChangeEvent, FocusEvent, useCallback, useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './custom-select.module.scss'

import { ChevronDown } from '@/app/assets/svg/chevron-down'
import { DisabledContent } from '@/templates'
import CustomSelectOptions from '@/ui/custom-select/custom-select-options'
import { CustomSelectProps } from '@/ui/custom-select/custom-select.types'
import { useCustomSelect } from '@/ui/custom-select/useCustomSelect'

export const CustomSelect = ({
  options,
  label,
  value,
  placeholder,
  isClearable = false,
  onChange,
  isLoading,
  disabled,
}: CustomSelectProps) => {
  const {
    isOpen,
    setIsOpen,
    closeSelectOnBlur,
    keyHandler,
    onSelectValueHandler,
    currentValue,
    clearHandler,
    optionsListRef,
    indexCurrent,
    filteredData,
    selectRef,
    inputRef,
    setFilterHandler,
    resetFilter,
    setIndexCurrent,
  } = useCustomSelect(options, onChange)

  const styles = {
    chevron: clsx(s.chevron, isOpen && s.open),
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true)
    setFilterHandler(event)
  }
  const valueToShow = !isOpen && (value || currentValue) && (
    <div className={s.input}>{value || currentValue}</div>
  )
  const searchInput = (isOpen || !currentValue) && (
    <input
      tabIndex={-1}
      placeholder={placeholder || 'Select...'}
      type={'text'}
      className={s.input}
      onChange={onChangeValue}
      ref={inputRef}
    />
  )
  const selectLabel = label && <label className={s.label}>{label}</label>

  const toggleOpen = () => {
    !isOpen && setIsOpen(true)
  }

  //setIsClearable does not work properly
  const setIsClearable = isClearable && (
    <>
      <button className={s['close-button']} onClick={clearHandler} type={'button'}>
        &times;
      </button>
      <div className={s.divider}></div>
    </>
  )

  const toggleButton = isLoading ? <div className={s.loader} /> : <ChevronDown />
  const onClickToggleButton = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DisabledContent disabled={disabled}>
      <div className={s.container}>
        {selectLabel}
        <div
          className={s.select}
          tabIndex={0}
          onBlur={closeSelectOnBlur}
          ref={selectRef}
          onKeyDown={keyHandler}
          onClick={toggleOpen}
        >
          {valueToShow}
          {searchInput}
          {setIsClearable}

          <button
            disabled={isLoading}
            tabIndex={-1}
            className={styles.chevron}
            onClick={onClickToggleButton}
            type={'button'}
          >
            {toggleButton}
          </button>
          <CustomSelectOptions
            ref={optionsListRef}
            indexCurrent={indexCurrent}
            isOpen={isOpen}
            items={filteredData}
            onSelectValueHandler={onSelectValueHandler}
            resetFilter={resetFilter}
            setIndexCurrent={setIndexCurrent}
          />
        </div>
      </div>
    </DisabledContent>
  )
}
