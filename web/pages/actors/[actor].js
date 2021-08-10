import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import ActorContent from '@/scenes/ActorContent'

const Actor = ({config, alt, image, description, name, pageSlug}) => {
  return (
    <MainContainer config={config}>
      <ActorContent
        pageSlug={pageSlug}
        name={name}
        description={description}
        image={image}
        alt={alt}
      />
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "actors" ][]{pageSlug}`).then((res) => {
    return [...res]
  })

  return {
    paths: paths?.map(({pageSlug}) => ({params: {actor: pageSlug}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const slug = params.actor
  const data = await client
    .fetch(
      groq`*[_type == "actors" && pageSlug == "${slug}"][0]{
        description,
        name,
        pageSlug,
        "image": image.asset,
        "alt": image.alt
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

Actor.propTypes = {
  config: PropTypes.object,
  alt: PropTypes.string,
  image: PropTypes.object,
  pageSlug: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
}

export default Actor
