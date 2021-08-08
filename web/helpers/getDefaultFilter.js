const getDefaultFilter = (category) => {
  const defaultValue = {...category}
  let idx = 0
  for (const key in defaultValue) {
    if (idx === 0) {
      defaultValue[key] = true
    } else {
      defaultValue[key] = false
    }
    idx++
  }

  return defaultValue
}

export default getDefaultFilter
