import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import {all, category} from '@/actions/blog'
import styles from './filterItem.module.scss'

const FilterItem = ({itemName, isActive, dispatch, name, groupName}) => {
  const getAction = (action) => {
    const currentAction = {...action}
    currentAction.payload = groupName
    currentAction.name = name
    return currentAction
  }
  const action = name === 'all' ? getAction(all) : getAction(category)

  return (
    <div
      className={styles.item}
      onClick={() => {
        dispatch(action)
      }}
    >
      <div className={classNames(styles.radioButton, isActive && styles.active)}></div>
      <span className={styles.category}>{itemName}</span>
    </div>
  )
}

FilterItem.propTypes = {
  item: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
}
export default FilterItem
