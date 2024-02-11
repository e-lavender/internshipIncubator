const setDateTemplate = ({ day, month, year }: { day: string; month: string; year: string }) => {
  return `${month}/${day.padStart(2, '0')}/${year}`
}

export const setDateFormat = (date: string | Date | undefined): string => {
  if (date == undefined) return ''

  const newDate = new Date(date)

  return setDateTemplate({
    day: newDate.getDay().toLocaleString(),
    month: newDate.getMonth().toLocaleString(),
    year: newDate.getFullYear().toString(),
  })
}
