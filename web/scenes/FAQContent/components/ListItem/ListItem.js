import PropTypes from 'prop-types'
import {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './listItem.module.scss'

const ListItem = ({item}) => {
  const [isOpen, setOpen] = useState(false)

  const {title, description, descriptionList} = item

  const toggleItem = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={styles.item}>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title} onClick={toggleItem}>
          {title}
        </h4>
        <div className={classNames(styles.button, isOpen && styles.active)} onClick={toggleItem}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={classNames(styles.descriptionGroup, isOpen && styles.open)}>
        <span className={styles.description}>{description}</span>
        <ol className={styles.itemList}>
          {descriptionList?.map((descriptionItem, idx) => {
            return (
              <li className={styles.descriptionItem} key={idx + title}>
                {descriptionItem}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.object
}
export default ListItem
