import PropTypes from 'prop-types'
import Link from 'next/link'

// import PostPreview from '@/components/PostPreview'

import styles from './description.module.scss'

const Description = ({actorReference, postReference, duration, fees}) => {
  const actors = actorReference.map(({name, pageSlug}, idx) => {
    return (
      <Link href={`/actors/${pageSlug}`} key={idx}>
        <a>{name}</a>
      </Link>
    )
  })
  return (
    <div className={styles.description}>
      <h3>
        Год выпуска:<span>{postReference.date.itemName}</span>
      </h3>
      <h3>
        Страна:<span>{postReference.country.itemName}</span>
      </h3>
      <h3>
        Жанр:<span>{postReference.genres.itemName}</span>
      </h3>
      <h3>
        Продолжительность:<span>{duration}</span>
      </h3>
      <h3>
        Кассовые сборы в мире:<span>{fees}</span>
      </h3>
      <h3>
        В ролях:<span>{actors}</span>
      </h3>
    </div>
  )
}

Description.propTypes = {
  postReference: PropTypes.object,
  actorReference: PropTypes.array,
  duration: PropTypes.string,
  fees: PropTypes.string
}
export default Description
