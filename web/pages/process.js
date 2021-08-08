import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import ProcessContent from '@/scenes/ProcessContent'

const Process = ({processContent, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <ProcessContent processContent={processContent} />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "processPage"][0]{
        processContent{
          ...,
          processList[]{
            title,
            image,
            alt,
            description
          }
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

Process.propTypes = {
  processContent: PropTypes.object
}

export default Process
