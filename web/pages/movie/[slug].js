import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import MovieContent from '@/scenes/MovieContent'

const Movie = ({
  config,
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
    <MainContainer config={config}>
      <MovieContent
        actorReference={actorReference}
        description={description}
        duration={duration}
        fees={fees}
        name={name}
        postPreview={postPreview}
        postReference={postReference}
        recommendation={recommendation}
        trailer={trailer}
      />
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "moviePage" ][]{pageSlug}`).then((res) => {
    return [...res]
  })

  return {
    paths: paths?.map(({pageSlug}) => ({params: {slug: pageSlug}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const slug = params.slug
  const data = await client
    .fetch(
      groq`*[_type == "moviePage" && pageSlug == "${slug}"][0]{
        ...,
        pageSlug,
        name,
        
        actorReference[]->,
        postReference{
          country->,
          date->,
          genres->,
          postType->,
        },
        recommendation[]->{
          pageSlug,
           "image":postPreview.image.asset,
           "alt":postPreview.image.alt,
           "type":postReference.postType->groupName,
           "itemName":postReference.genres->itemName,
        }
      }
      `
    )
    .then((res) => {
      return {...res}
    })

  return {
    props: {...data}
  }
}

Movie.propTypes = {
  config: PropTypes.object,
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

export default Movie
