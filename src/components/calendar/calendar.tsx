import React, { useState } from 'react'

import { getMonth, getYear } from 'date-fns'
import DatePicker from 'react-datepicker'

import './react-datepicker.scss'
import { CalendarIcon } from '@/app'

import range from 'lodash/range'
import { background } from '@storybook/theming'

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [isMonthPiker, setIsMonthPiker] = useState(false)
  const [isYearPiker, setIsYearPiker] = useState(false)
  const years = range(1900, getYear(new Date()) + 45, 1)

  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ]
  const handleMonthPiker = (): void => {
    setIsYearPiker(false)
    setIsMonthPiker(prev => !prev)
  }
  const handleYearPick = (): void => {
    setIsMonthPiker(false)
    setIsYearPiker(prev => !prev)
  }
  const renderYearContent = (year: any) => {
    const tooltipText = `Tooltip for year: ${year}`

    return years.map((year: any) => <div key={year}>{year}</div>)

    //return <span title={tooltipText}>{year}</span>
  }

  return (
    <div className="react__datepicker">
      <DatePicker
        className="red-border"
        showIcon
        icon={CalendarIcon}
        selected={startDate}
        //renderYearContent={renderYearContent}
        shouldCloseOnSelect={!isMonthPiker && !isYearPiker}
        showYearPicker={isYearPiker}
        //locale={enAU}
        showMonthYearPicker={isMonthPiker}
        dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : null)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button onClick={handleMonthPiker}>{months[getMonth(date)]}</button>
            <button onClick={handleYearPick}>{getYear(date)}</button>
            {/*<select*/}
            {/*  value={months[getMonth(date)]}*/}
            {/*  onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}*/}
            {/*>*/}
            {/*  {months.map(option => (*/}
            {/*    <option key={option} value={option}>*/}
            {/*      {option}*/}
            {/*    </option>*/}
            {/*  ))}*/}
            {/*</select>*/}

            {/*<select*/}
            {/*  className="react-datepicker__navigation--select"*/}
            {/*  value={getYear(date)}*/}
            {/*  onChange={({ target: { value } }) => changeYear(value)}*/}
            {/*>*/}
            {/*  {years.map((option: any) => (*/}
            {/*    <option*/}
            {/*      key={option}*/}
            {/*      value={option}*/}
            {/*      className="react-datepicker__navigation--option"*/}
            {/*    >*/}
            {/*      {option}*/}
            {/*    </option>*/}
            {/*  ))}*/}
            {/*</select>*/}
            <button
              className="react-datepicker__navigation--previous"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {'<'}
            </button>
            <button
              className="react-datepicker__navigation--next"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {'>'}
            </button>
          </div>
        )}
        onChange={date => setStartDate(date)}
      />
    </div>
  )
}
