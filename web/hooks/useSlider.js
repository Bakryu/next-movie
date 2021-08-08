import useResize from 'use-resizing'
const useSlider = (mobileSlider, desctopSlider = null) => {
  const screenSize = useResize()

  if (screenSize.width < 820) {
    return mobileSlider
  }
  return desctopSlider
}

export default useSlider
