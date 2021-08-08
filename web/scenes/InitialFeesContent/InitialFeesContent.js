import PropTypes from 'prop-types'
import LinkTo from '@/components/LinkTo'
import ANCHORS from '@/constants/anchors'
import STYLES from '@/constants/linkStyles'
import TopDecor from './components/decorElements/TopDecor'
import BottomDecor from './components/decorElements/BottomDecor'

import styles from './initialFeesContent.module.scss'

const InitialFeesContent = ({initialFeesContent, buttonName}) => {
  const {title, description, tableTitle, tableCompanyName, expenditureList, descriptionAfter} =
    initialFeesContent
  return (
    <section className={styles.initialFees}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.description}>{description}</span>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span className={styles.tableTitle}>{tableTitle}</span>
          <span className={styles.tableCompanyName}>{tableCompanyName}</span>
        </div>
        <ul className={styles.tableList}>
          {expenditureList.map(({expenditureName, expenditureFees}, idx) => {
            return (
              <li className={styles.tableListItem} key={idx}>
                <span className={styles.expenditureName}>{expenditureName}</span>
                <span className={styles.expenditureFees}>{expenditureFees}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.afterTable}>
        <span className={styles.descriptionAfter}>{descriptionAfter}</span>
        <LinkTo link={`#${ANCHORS.SEND_REQUEST}`} linkName={buttonName} style={STYLES.WHITE} />
      </div>
      <div className={styles.backgroundBox}>
        <BottomDecor />
      </div>
      <TopDecor />
    </section>
  )
}

InitialFeesContent.propTypes = {
  initialFeesContent: PropTypes.object,
  buttonName: PropTypes.string
}
export default InitialFeesContent
