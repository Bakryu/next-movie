import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import HomePageContent from '@/scenes/HomePageContent'

const HomePage = ({hero, partners, pathways, services, config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <HomePageContent hero={hero} partners={partners} pathways={pathways} services={services} />
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "homePage" ][0]{
            title,partners, pathways,services,
            hero{title, subTitle, proposition,
            propositionList,heroBg,
            video{videoPoster,
            "videoUrl": videoUrl.asset->url
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

HomePage.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  partners: PropTypes.object,
  pathways: PropTypes.object,
  services: PropTypes.object
}
export default HomePage
