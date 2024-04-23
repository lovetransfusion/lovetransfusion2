//Accepts Date
export const convertToZeroFirst = (initial) => {
  if (initial < 10) {
    const newInitial = `0${initial}`
    return newInitial
  }
  return initial
}
