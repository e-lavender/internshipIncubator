const setDateTemplate = (day: string, month: string, year: string) => {
  return `${month}/${day.padStart(2, '0')}/${year}`
}

export const setDateFormat = (date: string | Date | undefined): string => {
  if (date == undefined) return ''

  if (typeof date === 'string') {
    const newDate = new Date(date).toLocaleDateString()
    const [day, month, year] = newDate.split('.')

    return setDateTemplate(day, month, year)
  }

  const dateToString = date?.toLocaleDateString()
  const [day, month, year] = dateToString.split('.')

  return setDateTemplate(day, month, year)
}
