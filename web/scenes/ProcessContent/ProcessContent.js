import PropTypes from 'prop-types'
import useResize from 'use-resizing'
import NextImage from '@/components/NextImage'
import screenWidthConstant from '@/constants/screenWidthConstant'
import TopDecor from './components/TopDecor'

import styles from './processContent.module.scss'

const ProcessContent = ({processContent}) => {
  const {title, description, processList} = processContent
  const screenSize = useResize()

  const getImageSize = (idx, arrayLength) => {
    let width = 352
    const height = 210
    if (
      screenSize.width >= screenWidthConstant.BIG_SCREEN &&
      (idx === 0 || idx === arrayLength - 1)
    ) {
      width = 736
    }
    return {width, height}
  }

  return (
    <section className={styles.process}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.description}>{description}</span>
      <div className={styles.list}>
        {processList.map(({image, alt, title, description}, idx) => {
          const {width, height} = getImageSize(idx, processList.length)
          return (
            <div className={styles.listItem} key={idx}>
              <NextImage link={image} alt={alt} width={width} height={height} />
              <div className={styles.itemDescriptionWrapper}>
                <h2 className={styles.itemTitle}>
                  <span className={styles.itemTitleNumber}>0{idx + 1}</span>
                  {title}
                </h2>
                <span className={styles.itemDescription}>{description}</span>
              </div>
            </div>
          )
        })}
      </div>
      <TopDecor />
    </section>
  )
}

ProcessContent.propTypes = {
  processContentContent: PropTypes.object
}
export default ProcessContent
