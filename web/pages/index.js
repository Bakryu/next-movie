import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import HomePageContent from '@/scenes/HomePageContent'

const HomePage = ({config, movies, types}) => {
  return (
    <MainContainer config={config}>
      <HomePageContent movies={movies} types={types} />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`{"movies":*[_type == "moviePage" ][]{
        pageSlug,
        name,
        "image":postPreview.image.asset,
        "alt":postPreview.image.alt,
        "type":postReference.postType->groupName,
        "itemName":postReference.genres->itemName,
      },
      "types":*[_type == "postType" ][]{
        groupName,
        itemName
      } 
    }`
    )
    .then((res) => {
      return {...res}
    })

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {...data}
  }
}

HomePage.propTypes = {
  title: PropTypes.string,
  types: PropTypes.array,
  movies: PropTypes.array
}
export default HomePage
