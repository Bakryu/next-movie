import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import OwnGrowTransition from '@/scenes/OwnGrowTransition'
import HeaderDecor from '@/scenes/OwnGrowTransition/components/decorElements/own/HeaderDecor'
import ProposalDecor from '@/scenes/OwnGrowTransition/components/decorElements/own/ProposalDecor'
import BenefitsDecor from '@/scenes/OwnGrowTransition/components/decorElements/own/BenefitsDecor'

const Own = ({ownContent, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <OwnGrowTransition
        content={ownContent}
        navigation={config.ownGrowTransitionNavigation}
        buttonName={config.buttons.buttonLearnMore}
      >
        <HeaderDecor />
        <ProposalDecor />
        <BenefitsDecor />
      </OwnGrowTransition>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "ownPage"][0]{
        ownContent {
          benefits{
            title,
            description,
            "image":benefitsImage.asset->url,
            list[]{
              description
          }},
          hero{
            title,
            description,
            pageQuestions,
            video{
              "videoUrl": videoUrl.asset->url,
              videoPoster
            }
          },
          proposal{
            list[]{
              description,
              image
            },
            "slug":link->page->pageSlug,
            description,
            title
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

Own.propTypes = {
  ownContent: PropTypes.object,
  config: PropTypes.object
}

export default Own
