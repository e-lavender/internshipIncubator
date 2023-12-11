import React from 'react'

import s from './custom-select.module.scss'

import { ArrowDownIcon } from '@/app'
import { ChevronDown } from '@/app/assets/svg/chevron-down'

export const CustomSelect = ({
  options,
  label,
}: {
  label?: string
  options: { value: string; label: string }[]
}) => {
  return (
    <div className={s.container}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.select} tabIndex={0}>
        <input type={'text'} className={s.input} value={'value'} />
        <button className={s['close-button']}>&times;</button>
        <div className={s.divider}></div>
        <button className={s.caret}>
          <ChevronDown />
        </button>
        <ul className={s.options}>
          {options.map(option => {
            return (
              <li className={s.option} key={option.value}>
                {option.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
