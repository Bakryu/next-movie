import PropTypes from 'prop-types'
import Slick from 'react-slick'
import classNames from 'classnames/bind'

import styles from './mobileSlider.module.scss'

const MobileSlider = ({children, settings, instance, buttonsStyle}) => {
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
    slidesToShow: 5,
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

MobileSlider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
  instance: PropTypes.any
}

export default MobileSlider
