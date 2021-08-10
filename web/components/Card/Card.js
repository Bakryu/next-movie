import PropTypes from 'prop-types'
import Link from 'next/link'
import NextImage from '../NextImage'

import styles from './card.module.scss'

const Card = ({item, slug}) => {
  const {alt, image, name, pageSlug, itemName} = item
  const url = slug ? slug + pageSlug : pageSlug
  return (
    <>
      <div className={styles.category} key={pageSlug}>
        <Link href={url}>
          <a className={styles.card}>
            <NextImage link={image} alt={alt} width="172" height="248" />
            <h3>{name}</h3>
            <h6>{itemName}</h6>
          </a>
        </Link>
      </div>
    </>
  )
}

Card.propTypes = {
  groupName: PropTypes.string,
  movies: PropTypes.array
}

export default Card
