import PropTypes from 'prop-types'
import NextImage from '@/components/NextImage'
import {useSlider} from '@/hooks/index'
import getPartnersQuantity from '@/helpers/getPartnersQuantity'
import SLUGS from '@/constants/slugs'

import MobileSlider from '@/components/sliders/MobileSlider'
import LinkTo from '@/components/LinkTo'
import styles from './partners.module.scss'

const Partners = ({partners}) => {
  const {title, subTitle, servicesImageListDesc, linkName} = partners

  const {rows, slidesToShow} = getPartnersQuantity()

  const serviceList = servicesImageListDesc.map((image, idx) => {
    return (
      <div className={styles.imageWrapper} key={idx}>
        <div className={styles.image}>
          <NextImage link={image} alt="partners logo" />
        </div>
      </div>
    )
  })
  const slider = useSlider(
    <MobileSlider
      items={serviceList}
      settings={{
        rows: rows,
        slidesToShow: slidesToShow,
        centerMode: false
      }}
    />
  )

  return (
    <section className={styles.partners}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.descriptionGroup}>
          <h2 className={styles.description}>{subTitle}</h2>
          <LinkTo link={SLUGS.TESTIMONIALS} linkName={linkName} />
        </div>
      </div>
      <div className={styles.listWrapper}>
        {slider || <div className={styles.imageList}>{serviceList}</div>}
      </div>
    </section>
  )
}

Partners.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  servicesImageListDesc: PropTypes.array
}

export default Partners
