import PropTypes from 'prop-types'
import Slick from 'react-slick'
import useResize from 'use-resizing'
import classNames from 'classnames/bind'

import styles from './mobileSlider.module.scss'

const MobileSlider = ({items, settings, instance, buttonsStyle}) => {
  const widthSliderItem = 216
  const screenSize = useResize()
  const defaultSettings = {
    customPaging: function customDot(i) {
      return (
        <button className={classNames(styles.buttons, styles[buttonsStyle])}>
          <div>
            <span>{i}</span>
          </div>
        </button>
      )
    },
    arrows: false,
    dots: true,
    slidesToShow: (screenSize.width - 50) / widthSliderItem,
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

MobileSlider.propTypes = {
  items: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any
}

export default MobileSlider
