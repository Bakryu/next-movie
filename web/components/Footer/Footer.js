import PropTypes from 'prop-types'
import FooterGroupRoute from './components/FooterGroupRoute'
import FooterGroupContacts from './components/FooterGroupContacts'
import FooterGroupLogoTerms from './components/FooterGroupLogoTerms'
import styles from './footer.module.scss'

const Footer = ({footerNavigation, contacts, terms, logo}) => {
  return (
    <footer className={styles.footer}>
      <FooterGroupLogoTerms logoData={logo} terms={terms} />
      <div className={styles.descriptionWrapper}>
        <FooterGroupRoute list={footerNavigation.firstColumn.group} />
        <FooterGroupRoute list={footerNavigation.secondColumn.group} />
        <FooterGroupContacts contacts={contacts} />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footerNavigation: PropTypes.object,
  secondColumn: PropTypes.array,
  contacts: PropTypes.object,
  terms: PropTypes.object,
  logo: PropTypes.object
}

export default Footer
