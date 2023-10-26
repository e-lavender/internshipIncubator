import React, { useState } from 'react'

import { enAU, uk } from 'date-fns/locale'
import DatePicker from 'react-datepicker'

import './react-datepicker.scss'
import { CalendarIcon } from '@/app'
export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())

  // @ts-ignore
  return (
    <div className="react__datepicker">
      <DatePicker
        className="red-border"
        showIcon
        icon={CalendarIcon}
        selected={startDate}
        locale={enAU}
        dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : undefined)}
        onChange={date => setStartDate(date)}
      />
    </div>
  )
}
