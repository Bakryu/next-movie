import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'
import Content404 from '@/scenes/Content404'

const Page404 = ({title, description, image, alt, config}) => {
  return (
    <Content404
      title={title}
      description={description}
      image={image}
      alt={alt}
      button={config.buttons.buttonGoToHomePage}
    />
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "page404"][0]{
          title,
          description,
          image,
          alt
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

Page404.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.object,
  config: PropTypes.object
}

export default Page404
