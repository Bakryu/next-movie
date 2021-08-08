import PropTypes from 'prop-types'
import ListItem from '../ListItem'

import styles from './faqItem.module.scss'

const FAQItem = ({item}) => {
  const {title, list} = item

  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.listWrapper}>
        {list.map((listItem, idx) => {
          return <ListItem item={listItem} key={idx} />
        })}
      </div>
    </div>
  )
}

FAQItem.propTypes = {
  item: PropTypes.object
}
export default FAQItem
