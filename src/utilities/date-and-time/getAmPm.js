export const getAmPm = (initialHour) => {
  if (initialHour >= 12) {
    return 'pm'
  } else {
    return 'am'
  }
}
