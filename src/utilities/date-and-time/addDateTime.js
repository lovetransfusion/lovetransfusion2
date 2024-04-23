// daysToAdd must be an integer
export const addDaysToDate = (date, daysToAdd) => {
  const result = new Date(date)
  result.setDate(result.getDate() + daysToAdd)
  return result.toISOString() // Convert to ISO string format
}
