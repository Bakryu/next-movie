import Link from 'next/link'
import BigScreenNavigation from './components/BigScreenNavigation'
import styles from './header.module.scss'

const Header = ({navigationList, logo}) => {
  const createNavigationList = (list) => {
    return (
      <ul className={styles.listWrapper}>
        {list.map((item, idx) => {
          return (
            <li className={styles.listItem} key={idx}>
              <Link href="/">
                <a className={styles.name}> {item.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  const navigationItems = createNavigationList(navigationList)
  return (
    <header>
      <BigScreenNavigation logo={logo} navigationItems={navigationItems} />
    </header>
  )
}

export default Header
