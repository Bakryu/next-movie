import PropTypes from 'prop-types'
import Button from '@/components/buttons/Button'
import NextImage from '@/components/NextImage'
import COLORS from '@/constants/colors'
import SLUGS from '@/constants/slugs'

import styles from './content404.module.scss'

const Content404 = ({title, description, image, alt, button}) => {
  return (
    <section className={styles.content404}>
      <div className={styles.imageWrapper}>
        <NextImage link={image} alt={alt} />
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.description}>{description}</span>
        <Button color={COLORS.YELLOW} text={button} link={SLUGS.HOME} />
      </div>
    </section>
  )
}

Content404.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object
}

export default Content404
