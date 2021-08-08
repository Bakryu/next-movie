import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames/bind'
import {useState} from 'react'
import NextImage from '@/components/NextImage'

import styles from './mobileNavigation.module.scss'

const MobileNavigation = ({logo, navigationItems, children}) => {
  const [isOpen, setOpen] = useState(false)

  const {slug, logoImage, alt} = logo
  return (
    <nav className={styles.mobileNavigation}>
      <Link href={slug}>
        <a className={styles.logoWrapper}>
          <div className={styles.logo}>
            <NextImage link={logoImage} alt={alt} />
          </div>
        </a>
      </Link>
      <div className={styles.burgerContainer}>
        <div
          className={classNames(styles.burger, isOpen && styles.active)}
          onClick={() => setOpen(!isOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={classNames(styles.listWrapper, isOpen && styles.listWrapperActive)}>
        {children}
        {navigationItems}
      </div>
      <div className={styles.navBg}></div>
    </nav>
  )
}

MobileNavigation.propTypes = {
  logo: PropTypes.object,
  navigationItems: PropTypes.object,
  item: PropTypes.object
}
export default MobileNavigation
