import classNames from 'classnames/bind'
import NextImage from '@/components/NextImage'
import styles from '../footer.module.scss'

const FooterGroupContacts = ({contacts}) => {
  const {address, phoneNumber, email, socials} = contacts
  return (
    <div className={styles.descriptionGroupItem}>
      <span className={classNames(styles.address, styles.linkText)}>{address}</span>
      <a
        href={`tel:${phoneNumber.number}`}
        className={classNames(styles.phoneNumber, styles.linkText)}
      >
        {' '}
        {phoneNumber.placeholder}
      </a>
      <a href={`mailto:${email.email}`} className={classNames(styles.email, styles.linkText)}>
        {email.email}
      </a>
      <div className={styles.socialsWrapper}>
        {socials.map((item, idx) => {
          return (
            <a
              href={item.link}
              className={styles.socialsItem}
              key={idx}
              alt="social network"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.socialImage}>
                <NextImage link={item.image} alt="social" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default FooterGroupContacts
