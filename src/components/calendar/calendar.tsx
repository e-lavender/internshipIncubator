import React, { PropsWithChildren, useEffect, useState } from 'react'

import { getMonth, getYear } from 'date-fns'
import DatePicker from 'react-datepicker'
import './react-datepicker.scss'

import { CalendarIcon, useTranslation } from '@/app'
import { CalendarNavigationButton } from '@/components/calendar/calendar-navigation-button/calendar-navigation-button'
import { Typography } from '@/ui'

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
  const { t } = useTranslation()
  const { month, locale } = t.calendar

  useEffect(() => {
    setIsMonthPiker(false)
    setIsYearPiker(false)
  }, [startDate])
  const handleMonthPiker = (): void => {
    setIsYearPiker(false)
    setIsMonthPiker(prev => !prev)
  }
  const handleYearPicker = (): void => {
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
        locale={locale}
        showMonthYearPicker={isMonthPiker}
        startDate={isRange ? startDateInRange : null}
        endDate={isRange ? endDateInRange : null}
        selectsRange={isRange}
        dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : null)}
        onChange={(date: Date | [Date | null, Date | null] | null) => {
          isRange ? setDateRange(date as null[]) : setStartDate(date as Date)
        }}
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
          <div className="react-datepicker__navigation--wrapper">
            <div>
              <button onClick={handleMonthPiker}>
                <Typography className="react-datepicker__navigation--month" variant="bold-16">
                  {month[getMonth(date)]}
                </Typography>
              </button>
              <button onClick={handleYearPicker}>
                <Typography className="react-datepicker__navigation--year" variant="bold-16">
                  {getYear(date)}
                </Typography>
              </button>
            </div>
            <div>
              <CalendarNavigationButton
                className="react-datepicker__navigation--previous"
                onClick={isYearPiker ? decreaseYear : decreaseMonth}
                disabled={isYearPiker ? prevYearButtonDisabled : prevMonthButtonDisabled}
                direction="left"
              />
              <CalendarNavigationButton
                className="react-datepicker__navigation--next"
                onClick={isYearPiker ? increaseYear : increaseMonth}
                disabled={isYearPiker ? nextYearButtonDisabled : nextMonthButtonDisabled}
                direction="right"
              />
            </div>
          </div>
        )}
      />
    </div>
  )
}
