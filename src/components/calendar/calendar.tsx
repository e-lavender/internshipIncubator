import React, { PropsWithChildren, useEffect, useState } from 'react'

import en, { getMonth, getYear } from 'date-fns'
import DatePicker, { registerLocale } from 'react-datepicker'
import './react-datepicker.scss'

import ru from 'date-fns/locale/ru'
import eng from 'date-fns/locale/eng'

import { CalendarIcon, NextIcon, PreviousIcon } from '@/app'
import { Typography } from '@/ui'
registerLocale('en', en)
registerLocale('ru', ru)
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

type calendarProps = {
  isRange?: boolean
}

export const Calendar = ({
  isRange = false,
}: PropsWithChildren<calendarProps>): React.JSX.Element => {
  const [startDate, setStartDate] = useState(new Date())
  const [isMonthPiker, setIsMonthPiker] = useState(false)
  const [isYearPiker, setIsYearPiker] = useState(false)
  const [dateRange, setDateRange] = useState([null, null])
  const [startDateInRange, endDateInRange] = dateRange

  useEffect(() => {
    setIsMonthPiker(false)
    setIsYearPiker(false)
  }, [startDate])
  const handleMonthPiker = (): void => {
    setIsYearPiker(false)
    setIsMonthPiker(prev => !prev)
  }
  const handleYearPick = (): void => {
    setIsMonthPiker(false)
    setIsYearPiker(prev => !prev)
  }

  return (
    <div className="react__datepicker">
      <DatePicker
        calendarStartDay={1}
        isClearable={true}
        className="calendar"
        showIcon
        icon={CalendarIcon}
        selected={startDate}
        shouldCloseOnSelect={!isMonthPiker && !isYearPiker}
        showYearPicker={isYearPiker}
        locale="ru"
        //dateFormat="yyyy"
        showMonthYearPicker={isMonthPiker}
        startDate={isRange ? startDateInRange : null}
        endDate={isRange ? endDateInRange : null}
        selectsRange={isRange}
        dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : null)}
        onChange={date => (isRange ? setDateRange(date) : setStartDate(date))}
        renderCustomHeader={({
          date,
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
              <button onClick={handleMonthPiker}>
                <Typography className="react-datepicker__navigation--month" variant="bold-16">
                  {MONTH[getMonth(date)]}
                </Typography>
              </button>
              <button onClick={handleYearPick}>
                <Typography className="react-datepicker__navigation--year" variant="bold-16">
                  {getYear(date)}
                </Typography>
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
      />
    </div>
  )
}
