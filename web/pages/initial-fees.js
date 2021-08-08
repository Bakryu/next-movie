import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import InitialFeesContent from '@/scenes/InitialFeesContent'

const InitialFees = ({initialFeesContent, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <InitialFeesContent
        initialFeesContent={initialFeesContent}
        buttonName={config.buttons.buttonSendRequest}
      />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "initialFeesPage"][0]{
        initialFeesContent{
          ...,
          expenditureList[]{
            expenditureFees,
            expenditureName
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

InitialFees.propTypes = {
  initialFeesContent: PropTypes.object
}

export default InitialFees
