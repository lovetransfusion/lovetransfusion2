import { capitalize } from './capitalize'

export const capitalizeAllFirstLetter = (str) => {
  const theString = str.split(' ')
  const newStr = theString.map((word) => capitalize(word)).join(' ')
  return newStr
}
