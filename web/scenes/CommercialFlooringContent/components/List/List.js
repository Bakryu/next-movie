import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import NextImage from '@/components/NextImage'
import styles from './list.module.scss'

const List = ({list}) => {
  return (
    <div className={styles.list}>
      {list?.map(({list, mainImage, secondaryImage, title}, idx) => {
        return (
          <div className={styles.item} key={idx}>
            <div
              className={classNames(styles.imageWrapper, secondaryImage && styles.secondaryMargin)}
            >
              {mainImage && (
                <div className={styles.mainImage}>
                  <NextImage link={mainImage.image} alt={mainImage.alt} />
                </div>
              )}
              {secondaryImage && (
                <div className={styles.secondaryImage}>
                  <NextImage link={secondaryImage.image} alt={secondaryImage.alt} />
                </div>
              )}
            </div>

            <div className={styles.descriptionWrapper}>
              <h4 className={styles.title}>{title}</h4>
              {list?.map((item, idx) => {
                return (
                  <p className={styles.description} key={idx}>
                    {item}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.object
}
export default List
