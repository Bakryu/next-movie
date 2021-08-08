import Link from 'next/link'
import PropTypes from 'prop-types'
import NextImage from '@/components/NextImage'

import styles from './bigScreenNavigation.module.scss'

const BigScreenNavigation = ({logo, navigationItems}) => {
  const {slug, logoImageMain, alt} = logo
  return (
    <>
      <div className={styles.bigScreen}>
        <Link href="/">
          <a className={styles.logoWrapper}>
            <div className={styles.logo}>
              <NextImage link={logoImageMain} alt={alt} />
            </div>
          </a>
        </Link>
        {navigationItems}
      </div>
    </>
  )
}

BigScreenNavigation.propTypes = {
  navigationItems: PropTypes.object,
  logo: PropTypes.object
}

export default BigScreenNavigation
