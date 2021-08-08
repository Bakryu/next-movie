import PropTypes from 'prop-types'
import getUrl from '@/helpers/getUrl'
import LinkTo from '@/components/LinkTo'
import NextImage from '@/components/NextImage'
import STYLES from '@/constants/linkStyles'
import styles from './proposal.module.scss'

const Proposal = ({proposal, buttonName, decor}) => {
  const {title, description, list, slug} = proposal
  return (
    <section className={styles.proposal}>
      <div className={styles.descriptionWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.description}>{description}</span>
        <LinkTo link={slug} linkName={buttonName} style={STYLES.WHITE} />
      </div>
      <div className={styles.listWrapper}>
        {list.map(({image, description}, idx) => {
          return (
            <div className={styles.question} key={idx}>
              <div className={styles.itemWrapper}>
                <div className={styles.itemImage}>
                  <NextImage link={image} alt="decor image" />
                </div>
                <span className={styles.itemDescription}>{description}</span>
              </div>
            </div>
          )
        })}
      </div>
      {decor}
    </section>
  )
}

Proposal.propTypes = {
  pageQuestions: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.object
}

export default Proposal
