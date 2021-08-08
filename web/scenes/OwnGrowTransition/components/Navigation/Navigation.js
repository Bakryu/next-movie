import Link from 'next/link'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './navigation.module.scss'

const Navigation = ({navigation}) => {
  const router = useRouter()
  const currentSlug = router.route

  return (
    <nav className={styles.navigation}>
      {navigation.map(({link, name, slug}) => {
        return (
          <Link href={link || slug} key={name}>
            <a className={classNames(styles.item, currentSlug === slug ? styles.active : '')}>
              {name}
            </a>
          </Link>
        )
      })}
    </nav>
  )
}

Navigation.propTypes = {
  navigation: PropTypes.array
}

export default Navigation
