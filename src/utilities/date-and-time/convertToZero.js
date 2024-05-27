//Accepts Date
// Example: 01/03/23
export const convertToZeroFirst = (initial) => {
  if (initial < 10) {
    const newInitial = `0${initial}`
    return newInitial
  }
  return initial
}
