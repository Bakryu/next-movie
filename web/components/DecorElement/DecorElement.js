import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './decorElement.module.scss'

const DecorElement = ({color}) => {
  return <div className={classNames(styles.decor, styles[color])}></div>
}

DecorElement.propTypes = {
  color: PropTypes.string
}

export default DecorElement
