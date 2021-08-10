import PropTypes from 'prop-types'

import Category from './components/Category'
import styles from './homePageContent.module.scss'
const HomePageContent = ({movies, types}) => {
  const typesList = types.map(({groupName, itemName}, idx) => {
    return (
      <div className={styles.category} key={idx}>
        <h2 className={styles.title}>{itemName}</h2>
        <div className={styles.sliderWrapper}>
          <Category movies={movies} groupName={groupName} />
        </div>
      </div>
    )
  })
  return <section className={styles.content}>{typesList}</section>
}

HomePageContent.propTypes = {
  movies: PropTypes.array,
  types: PropTypes.array
}
export default HomePageContent
