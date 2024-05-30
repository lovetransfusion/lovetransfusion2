export const get24HourFormat = (hour) => {
  if (hour > 12) {
    const time = hour - 12
    return time
  } else {
    return hour
  }
}
