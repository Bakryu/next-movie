import PropTypes from 'prop-types'
import NextImage from '@/components/NextImage'
import blur from '@/public/image/background-4.png'
import styles from './actorContent.module.scss'

const ActorContent = ({alt, image, description, name}) => {
  return (
    <section className={styles.actor}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.mainWrapper}>
        <NextImage link={image} alt={alt} width={960} height={600} quality={100} blur={blur} />
      </div>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

ActorContent.propTypes = {
  pageSlug: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  alt: PropTypes.string
}
export default ActorContent
