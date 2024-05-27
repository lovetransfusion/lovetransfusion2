const getExistingData = ({ fullDate, localKey }) => {
  const existing = localStorage.getItem(`${localKey}-${fullDate}`)
  const parsedExisting = JSON.parse(existing)
  return parsedExisting
}

function setMessageSeen({ fullDate, itemName, localKey }) {
  const existing = getExistingData({ fullDate, localKey })
  const name = `${fullDate}-${itemName}`
  if (existing) {
    const itemExist = existing?.some((item) => item === name)
    if (!itemExist) {
      const newList = [...existing, name]
      localStorage.setItem(`${localKey}-${fullDate}`, JSON.stringify(newList))
      return false
    }
    return true
  } else {
    localStorage.setItem(`${localKey}-${fullDate}`, JSON.stringify([name]))
    return false
  }
}

const removeUnusedChangeLog = ({ fullDate, localKey }) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const doesInclude = key.includes(localKey)
    if (doesInclude && key !== `${localKey}-${fullDate}`) {
      localStorage.removeItem(key)
    }
  }
}

export const checkIfHasHuggedBefore = ({ itemName, localKey }) => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const fullDate = `${day}${month}${year}`
  const doesExist = setMessageSeen({ fullDate, itemName, localKey })
  removeUnusedChangeLog({ fullDate, localKey })
  return doesExist
}

export const checkLocalWithoutUpdating = ({ localKey, id }) => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const fullDate = `${day}${month}${year}`
  const key = `${localKey}-${fullDate}`
  const localItems = JSON.parse(localStorage.getItem(key))
  const doesExist =
    localItems?.some((item) => item === `${fullDate}-${id}`) || false
  return doesExist
}