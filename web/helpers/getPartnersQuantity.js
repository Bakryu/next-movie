import useResize from 'use-resizing'

const getPartnersQuantity = () => {
  const screenSize = useResize()
  if (screenSize.width < 376) {
    return {
      rows: 4,
      slidesToShow: 1.5
    }
  }
  if (screenSize.width < 480) {
    return {
      rows: 3,
      slidesToShow: 1.9
    }
  }
  if (screenSize.width) {
    return {
      rows: 2,
      slidesToShow: 2.3
    }
  }
}

export default getPartnersQuantity
