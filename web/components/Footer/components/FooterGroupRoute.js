import Link from 'next/link'
import styles from '../footer.module.scss'

const FooterGroupRoute = ({list}) => {
  return (
    <div className={styles.descriptionGroupItem}>
      {list.map((item, idx) => {
        const {link, slug, name} = item
        return (
          <Link href={link || slug} key={idx}>
            <a className={styles.linkText}>{name}</a>
          </Link>
        )
      })}
    </div>
  )
}
export default FooterGroupRoute
