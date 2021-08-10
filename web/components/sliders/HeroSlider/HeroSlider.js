import PropTypes from 'prop-types'
import Slick from 'react-slick'

import Arrow from './components/Arrow'
import arrowLeft from '@/public/image/arrow-left-black.svg'
import arrowRight from '@/public/image/arrow-right.svg'

const HeroSlider = ({children, settings, instance}) => {
  const defaultSettings = {
    prevArrow: <Arrow direction="previous" arrowImage={arrowLeft} />,
    nextArrow: <Arrow direction="next" arrowImage={arrowRight} />,
    arrows: true,
    slidesToShow: 4,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    ...settings
  }

  return (
    <Slick {...defaultSettings} ref={instance}>
      {children}
    </Slick>
  )
}

HeroSlider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any
}

export default HeroSlider
