import PropTypes from 'prop-types'

import Hero from './components/Hero'
import Partners from './components/Partners'
import PathWay from './components/PathWay'
import Services from './components/Services'

const HomePageContent = ({hero, pathways, services, partners}) => {
  return (
    <>
      <Hero hero={hero} />
      <PathWay pathways={pathways} />
      <Services services={services} />
      <Partners partners={partners} />
    </>
  )
}

HomePageContent.propTypes = {
  hero: PropTypes.object,
  pathways: PropTypes.object,
  services: PropTypes.object,
  partners: PropTypes.object
}
export default HomePageContent
