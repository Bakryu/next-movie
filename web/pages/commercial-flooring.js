import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import CommercialFlooringContent from '@/scenes/CommercialFlooringContent'

const CommercialFlooring = ({commercialFlooringContent, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <CommercialFlooringContent commercialFlooringContent={commercialFlooringContent} />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "commercialFlooringPage"][0]{
        commercialFlooringContent{
          title,
          description,
          list[]{
            title,
            "list":groupList.list[],
            mainImage{
                alt,
                "image":asset
            },
            secondaryImage{
                alt,
                "image":asset
            },
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

CommercialFlooring.propTypes = {
  faqContent: PropTypes.object
}

export default CommercialFlooring
