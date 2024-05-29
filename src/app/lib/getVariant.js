const cryptoRandom = () => {
  return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)
}

export const getVariant = (variants) => {
  let num = cryptoRandom() * 100
  let percentage = 100 / variants.length

  return (
    variants.find(() => {
      num -= percentage
      return num <= 0
    }) ?? variants[0]
  )
}
