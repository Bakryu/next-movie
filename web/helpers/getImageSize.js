import IMAGE_SIZE from '@/constants/imageSize'
import SCREEN_SIZE from '@/constants/screenSize'

const getImageSize = (idx, width) => {
  const currentSize = {width: IMAGE_SIZE.SMALL_WIDTH, height: IMAGE_SIZE.HEIGHT}

  if (width >= SCREEN_SIZE.MOBILE) {
    currentSize.width = IMAGE_SIZE.SMALL_WIDTH
    if (idx % 3 === 0) {
      currentSize.width = IMAGE_SIZE.LARGE_WIDTH
    }
  }
  return currentSize
}
export default getImageSize
