const getExistingData = (fullDate) => {
  const existing = localStorage.getItem(`hugs-list-${fullDate}`)
  const parsedExisting = JSON.parse(existing)
  return parsedExisting
}

function setMessageSeen({ fullDate, firstName }) {
  const existing = getExistingData(fullDate)
  const name = `${fullDate}-${firstName}`
  if (existing) {
    const itemExist = existing?.some((item) => item === name)
    if (!itemExist) {
      const newList = [...existing, name]
      localStorage.setItem(`hugs-list-${fullDate}`, JSON.stringify(newList))
      return false
    }
    return true
  } else {
    localStorage.setItem(`hugs-list-${fullDate}`, JSON.stringify([name]))
    return false
  }
}

const removeUnusedChangeLog = (fullDate) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const doesInclude = key.includes("hugs-list")
    if (doesInclude && key !== `hugs-list-${fullDate}`) {
      localStorage.removeItem(key)
    }
  }
}

export const checkIfHasHuggedBefore = (firstName) => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const fullDate = `${day}${month}${year}`
  const doesExist = setMessageSeen({ fullDate, firstName })
  removeUnusedChangeLog(fullDate)
  return doesExist
}
