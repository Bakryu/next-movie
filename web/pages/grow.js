import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import OwnGrowTransition from '@/scenes/OwnGrowTransition'
import HeaderDecor from '@/scenes/OwnGrowTransition/components/decorElements/growTransition/HeaderDecor'
import ProposalDecor from '@/scenes/OwnGrowTransition/components/decorElements/growTransition/ProposalDecor'
import BenefitsDecor from '@/scenes/OwnGrowTransition/components/decorElements/grow/BenefitsDecor'

const Grow = ({growContent, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <OwnGrowTransition
        content={growContent}
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
      groq`*[_type == "growPage"][0]{
        growContent {
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

Grow.propTypes = {
  growContent: PropTypes.object,
  config: PropTypes.object
}

export default Grow
