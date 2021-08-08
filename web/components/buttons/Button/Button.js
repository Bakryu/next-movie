import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import StaticImage from '@/components/StaticImage'
import styles from './Button.module.scss'

const Button = ({color, onClick, text, link, type, image}) => {
  return (
    <button
      className={classNames(styles[color], styles.buttonStyles)}
      onClick={onClick}
      type={type && type}
    >
      {text || <StaticImage link={image} alt="search" />}
      {link && <a className={styles.link} href={link} />}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string
}

export default Button
