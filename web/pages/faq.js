import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import FAQContent from '@/scenes/FAQContent'

const Faq = ({faqContent, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <FAQContent faqContent={faqContent} />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "faqPage"][0]{
        faqContent{
          title,
          list[]{
            title,
            "list":groupList.list[]{
              title,
              description,
              descriptionList
            }
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

Faq.propTypes = {
  faqContent: PropTypes.object
}

export default Faq
