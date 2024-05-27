const cryptoRandom = () => {
  return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)
}

export const getBucket = (buckets) => {
  let num = cryptoRandom() * 100
  let percentage = 100 / buckets.length

  return (
    buckets.find(() => {
      num -= percentage
      return num <= 0
    }) ?? buckets[0]
  )
}
