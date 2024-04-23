import { convertToZeroFirst } from "./convertToZero"

export const subtractDateTime = (date1, date2) => {
  const now = new Date(date1)
  const difference = date2 - now

  const initialDays = Math.floor(difference / (1000 * 60 * 60 * 24))
  const days = convertToZeroFirst(initialDays)
  const initialHours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const hours = convertToZeroFirst(initialHours)
  const initialMinutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  )
  const minutes = convertToZeroFirst(initialMinutes)
  const initialSeconds = Math.floor((difference % (1000 * 60)) / 1000)
  const seconds = convertToZeroFirst(initialSeconds)

  return { days, hours, minutes, seconds }
}
