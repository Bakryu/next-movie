import PropTypes from 'prop-types'
import NextImage from '@/components/NextImage'
import Video from '@/components/Video'
import Card from '@/components/Card'

import Description from './components/Description'

import styles from './movieContent.module.scss'

const MovieContent = ({
  actorReference,
  description,
  duration,
  fees,
  name,
  postPreview,
  postReference,
  recommendation,
  trailer
}) => {
  return (
    <section className={styles.movie}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.mainWrapper}>
        <NextImage
          link={postPreview.image.asset}
          alt={postPreview.image.alt}
          width={178}
          height={242}
        />
        <p>{description}</p>
      </div>
      <Description
        actorReference={actorReference}
        postReference={postReference}
        duration={duration}
        fees={fees}
      />
      <Video video={trailer} />
      <h2>Рекомендації</h2>
      <div className={styles.cardWrapper}>
        {recommendation?.map((item, idx) => {
          return <Card item={item} key={idx} slug="/movie/" />
        })}
      </div>
    </section>
  )
}

MovieContent.propTypes = {
  postPreview: PropTypes.object,
  postReference: PropTypes.object,
  actorReference: PropTypes.array,
  recommendation: PropTypes.array,
  description: PropTypes.string,
  duration: PropTypes.string,
  fees: PropTypes.string,
  name: PropTypes.string,
  trailer: PropTypes.string
}
export default MovieContent
