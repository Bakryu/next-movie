import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import CategoryContent from '@/scenes/CategoryContent'

const Category = ({config, category, movies}) => {
  return (
    <MainContainer config={config}>
      <CategoryContent category={category} movies={movies} />
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "postType"][]{groupName}`).then((res) => {
    return [...res]
  })

  return {
    paths: paths?.map(({groupName}) => ({params: {category: groupName}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const slug = params.category
  const data = await client
    .fetch(
      groq`{"category": *[_type == "postType" && groupName == "${slug}" ][0]{
        itemName,
        groupName
       
    },
    "movies":*[_type == 'moviePage' && postReference.postType->groupName == "${slug}"][]{
      name,
      pageSlug,
      "image":postPreview.image.asset,
      "alt":postPreview.image.alt,
    },
  }`
    )
    .then((res) => {
      return {...res}
    })

  return {
    props: {...data}
  }
}

Category.propTypes = {
  config: PropTypes.object,
  movies: PropTypes.array
}

export default Category
