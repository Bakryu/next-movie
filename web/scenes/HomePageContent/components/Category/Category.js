import PropTypes from 'prop-types'

import HeroSlider from '@/components/sliders/HeroSlider'
import Card from '@/components/Card'

const Category = ({movies, groupName}) => {
  const handleFilter = movies.filter(({type}) => type === groupName)
  const sliderItems = handleFilter.map((item, idx) => {
    return <Card item={item} slug="movie/" key={idx} />
  })

  const settings = {arrows: true, dots: false}

  return <HeroSlider settings={settings}>{sliderItems}</HeroSlider>
}

Category.propTypes = {
  groupName: PropTypes.string,
  movies: PropTypes.array
}

export default Category
