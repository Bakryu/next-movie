import PropTypes from 'prop-types'
import NextImage from '@/components/NextImage'
import styles from './benefits.module.scss'

const Benefits = ({benefits, decor}) => {
  const {image, list, title, description} = benefits
  return (
    <>
      <section className={styles.benefits}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.description}>{description}</span>
          <div className={styles.listWrapper}>
            {list.map(({description}, idx) => {
              return (
                <div className={styles.itemWrapper} key={idx}>
                  <span className={styles.itemOrder}>0{idx + 1}</span>
                  <span className={styles.itemDescription}>{description}</span>
                </div>
              )
            })}
            {decor}
          </div>
        </div>
      </section>
      <div className={styles.imageWrapper}>
        {<NextImage link={image} alt="section background" />}
      </div>
    </>
  )
}

Benefits.propTypes = {
  benefits: PropTypes.object
}

export default Benefits
