import PropTypes from 'prop-types'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Proposal from './components/Proposal'
import Benefits from './components/Benefits'

const OwnGrowTransitionPage = ({navigation, content, buttonName, children}) => {
  const {benefits, hero, proposal} = content
  return (
    <>
      <Navigation navigation={navigation} />
      <Hero hero={hero} decor={children[0]} />
      <Proposal proposal={proposal} buttonName={buttonName} decor={children[1]} />
      <Benefits benefits={benefits} decor={children[2]} />
    </>
  )
}

OwnGrowTransitionPage.propTypes = {
  navigation: PropTypes.array,
  ownContent: PropTypes.object,
  buttonName: PropTypes.string
}
export default OwnGrowTransitionPage
