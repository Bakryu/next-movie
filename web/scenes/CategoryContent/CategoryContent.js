import PropTypes from 'prop-types'
import Card from '@/components/Card'
import styles from './categoryContent.module.scss'

const BlogContent = ({category, movies}) => {
  const name = category.itemName || 'movie'
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.list}>
        {movies.map((item, idx) => {
          return <Card item={item} slug="/movie/" key={idx} />
        })}
      </div>
    </section>
  )
}

BlogContent.propTypes = {
  category: PropTypes.object,
  movies: PropTypes.array
}
export default BlogContent
