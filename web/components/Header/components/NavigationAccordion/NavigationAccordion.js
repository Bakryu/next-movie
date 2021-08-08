import Link from 'next/link'
import classNames from 'classnames/bind'
import {useState} from 'react'
import PropTypes from 'prop-types'

import styles from './navigationAccordion.module.scss'

const NavigationAccordion = ({item}) => {
  const [isOpen, setOpen] = useState(false)
  const {groupBoxName, groupList} = item

  return (
    <li className={classNames(styles.listItem, isOpen && styles.listItemOpen)}>
      <div
        className={styles.listContent}
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        {groupBoxName}
        <svg
          className={classNames(styles.arrow, isOpen && styles.arrowOpen)}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          alt="decor arrow"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 9.99294L7.11509 9L10.5 12.0141L13.8849 9L15 9.99294L10.5 14L6 9.99294Z"
            fill="#323232"
          />
        </svg>
      </div>
      <div className={classNames(styles.groupWrapper, isOpen && styles.groupWrapperOpen)}>
        {groupList.map((groupItem, idx) => {
          return (
            <Link href={groupItem.link || groupItem.slug} key={idx}>
              <a
                className={styles.groupItem}
                onClick={() => {
                  setOpen(!isOpen)
                }}
              >
                {groupItem.name}
              </a>
            </Link>
          )
        })}
      </div>
    </li>
  )
}

NavigationAccordion.propTypes = {
  item: PropTypes.object
}

export default NavigationAccordion
