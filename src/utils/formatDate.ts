export const dateToString = (date: Date | string) => {
  const newDate: Date = typeof date === 'string' ? new Date(date) : date

  return {
    fullDate: newDate.toLocaleString(),
    date: newDate.toLocaleDateString(),
    time: newDate.toLocaleTimeString()
  }
}
