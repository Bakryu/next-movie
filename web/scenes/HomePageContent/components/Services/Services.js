import PropTypes from 'prop-types'

import serviceList from './components/serviceList'
import MobileSlider from '@/components/sliders/MobileSlider'
import useSlider from '@/hooks/useSlider'

import styles from './service.module.scss'

const Services = ({services}) => {
  const {title, subTitle, servicesItemList} = services
  const settings = {slidesToShow: 1}
  const listItem = serviceList(servicesItemList)
  const slider = useSlider(
    <MobileSlider items={listItem} settings={settings} buttonsStyle="serviceSlider" />
  )

  return (
    <section className={styles.services}>
      <div className={styles.descriptionBox}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{subTitle}</h2>
      </div>
      <div className={styles.servicesList}>{slider || listItem}</div>
    </section>
  )
}

Services.propTypes = {
  services: PropTypes.object
}

export default Services
