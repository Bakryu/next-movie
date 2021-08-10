import PropTypes from 'prop-types'
import Card from '@/components/Card'
import styles from './categoryContent.module.scss'

const BlogContent = ({category, movies}) => {
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{category.itemName}</h2>
      <div className={styles.list}>
        {movies.map((item) => {
          return <Card item={item} slug="/movie/" />
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
