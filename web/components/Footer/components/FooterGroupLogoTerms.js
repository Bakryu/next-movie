import Link from 'next/link'
import NextImage from '@/components/NextImage'
import styles from '../footer.module.scss'

const FooterGroupLogoTerms = ({logoData, terms}) => {
  const {alt, linkAlternative, logoImage, slug} = logoData
  const {privacyPolicy, termsOfUse, koydolInc, allRightReserved} = terms
  return (
    <div className={styles.logoTermsWrapper}>
      <Link href={linkAlternative || slug}>
        <a className={styles.logoWrapper}>
          {' '}
          <div className={styles.logo}>
            <NextImage link={logoImage} alt={alt} />
          </div>
        </a>
      </Link>
      <div className={styles.termsWrapper}>
        <div className={styles.termsPolicyWrapper}>
          <Link href={privacyPolicy.link || privacyPolicy.slug}>
            <a className={styles.privacyPolicy}>{privacyPolicy.name}</a>
          </Link>
          <Link href={termsOfUse.link || termsOfUse.slug}>
            <a className={styles.termsOfUse}>{termsOfUse.name}</a>
          </Link>
        </div>
        <span className={styles.koydolInc}>{koydolInc}</span>
        <span className={styles.allRightReserved}>{allRightReserved}</span>
      </div>
    </div>
  )
}
export default FooterGroupLogoTerms
