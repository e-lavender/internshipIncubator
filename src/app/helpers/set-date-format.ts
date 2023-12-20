export const setDateFormat = (date: string | Date | undefined): string => {
  if (typeof date === 'string') return date

  if (date == undefined) return ''

  const dateToString = date?.toLocaleDateString()
  const [day, month, year] = dateToString.split('.')

  return `${month}/${day.padStart(2, '0')}/${year}`
}
