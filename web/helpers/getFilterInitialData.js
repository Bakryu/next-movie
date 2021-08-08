const getInitialValue = (filter) => {
  const initialValue = new Object()

  for (const group in filter) {
    const filterGroup = new Object()
    filterGroup.all = true
    filter[group].forEach((element) => (filterGroup[element.itemName] = false))
    initialValue[group] = filterGroup
  }

  initialValue.formValue = undefined

  return initialValue
}
export default getInitialValue
