import useResize from 'use-resizing'

 // this is an operation for dynamically calculating the number of displayed slider items and width
const getHeroSliderSize = () => {
  const screenSize = useResize()
  const paddingLeftToSliderSmall = 561 // distance to the slider on the left
  const paddingLeftToSliderBig = screenSize.width - 950 //distance to the slider on the left large screens
  const widthSliderItem = 288 //the maximum width of the slider element
  if (screenSize.width < 1600) {
    return (screenSize.width - paddingLeftToSliderSmall) / widthSliderItem
  } else {
    return (screenSize.width - paddingLeftToSliderBig) / widthSliderItem
  }
}

export default getHeroSliderSize
