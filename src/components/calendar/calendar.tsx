import React, { useState } from 'react'

import { getMonth, getYear } from 'date-fns'
import DatePicker from 'react-datepicker'

import './react-datepicker.scss'
import { CalendarIcon, NextIcon, PreviousIcon } from '@/app'

import range from 'lodash/range'
import { background } from '@storybook/theming'

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [isMonthPiker, setIsMonthPiker] = useState(false)
  const [isYearPiker, setIsYearPiker] = useState(false)
  const years = range(1900, getYear(new Date()) + 45, 1)

  const MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
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
        //dateFormat="yyyy"
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
          prevYearButtonDisabled,
          nextYearButtonDisabled,
          increaseYear,
          decreaseYear,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <button className="react-datepicker__navigation--month" onClick={handleMonthPiker}>
                {MONTH[getMonth(date)]}
              </button>
              <button className="react-datepicker__navigation--year" onClick={handleYearPick}>
                {getYear(date)}
              </button>
            </div>
            <div>
              <button
                className="react-datepicker__navigation--previous"
                onClick={isYearPiker ? decreaseYear : decreaseMonth}
                disabled={isYearPiker ? prevYearButtonDisabled : prevMonthButtonDisabled}
              >
                <PreviousIcon />
              </button>
              <button
                className="react-datepicker__navigation--next"
                onClick={isYearPiker ? increaseYear : increaseMonth}
                disabled={isYearPiker ? nextYearButtonDisabled : nextMonthButtonDisabled}
              >
                <NextIcon />
              </button>
            </div>
          </div>
        )}
        onChange={date => setStartDate(date)}
      />
    </div>
  )
}
