const filterPosts = (posts, filterList) => {
  let result = [...posts]
  for (const item in filterList) {
    if (filterList[item]?.all === true) {
      continue
    }
    for (const category in filterList[item]) {
      if (filterList[item][category] === false) {
        const categoryResult = result.filter(
          ({postReference}) => postReference[item].itemName !== [category][0]
        )
        result = [...categoryResult]
      }
    }
  }
  return result
}
export default filterPosts
