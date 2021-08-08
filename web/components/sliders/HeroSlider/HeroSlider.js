import PropTypes from 'prop-types'
import Slick from 'react-slick'
import getHeroSliderSize from '@/helpers/getHeroSliderSize'

import Arrow from './components/Arrow'
import arrowLeft from '@/public/image/arrow-left-black.svg'
import arrowRight from '@/public/image/arrow-right.svg'

const HeroSlider = ({items, settings, instance}) => {
  const defaultSettings = {
    prevArrow: <Arrow direction="previous" arrowImage={arrowLeft} />,
    nextArrow: <Arrow direction="next" arrowImage={arrowRight} />,
    arrows: true,
    slidesToShow: getHeroSliderSize(),
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    ...settings
  }

  return (
    <Slick {...defaultSettings} ref={instance}>
      {items}
    </Slick>
  )
}

HeroSlider.propTypes = {
  items: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any
}

export default HeroSlider
