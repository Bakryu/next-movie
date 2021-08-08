import PropTypes from 'prop-types'
import useSlider from '@/hooks/useSlider'
import StaticImage from '@/components/StaticImage'
import getUrl from '@/helpers/getUrl'
import Button from '@/components/buttons/Button'
import styles from './hero.module.scss'
import HeroSlider from '@/components/sliders/HeroSlider'
import MobileSlider from '@/components/sliders/MobileSlider'
import Video from '@/components/Video'
import propositionDecor from '@/public/image/proposition-decor.png'
import propositionDecorBlack from '@/public/image/proposition-decor-black.png'

const Hero = ({hero}) => {
  const {title, subTitle, proposition, propositionList, heroBg, video} = hero

  const sliderItems = propositionList.map((item, idx) => {
    return (
      <div key={idx}>
        <div className={styles.item}>
          <span className={styles.itemNumber}>0{idx + 1}</span>
          <span className={styles.itemDesc}>{item}</span>
        </div>
      </div>
    )
  })

  const viewSlider = useSlider(
    <MobileSlider items={sliderItems} buttonsStyle="heroSlider" />,
    <HeroSlider items={sliderItems} />
  )

  return (
    <>
      <section className={styles.heroSection} style={{backgroundImage: `url(${getUrl(heroBg)})`}}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{subTitle}</h2>
        <Button color={'yellow'} text={'send request'} onClick={() => {}} />
        <h3 className={styles.proposition}>
          <div className={styles.propositionDecor}>
            <StaticImage
              link={propositionDecor}
              className={styles.propositionDecor}
              alt="decorative element"
            />
          </div>
          <div className={styles.propositionDecorBlack}>
            <StaticImage
              link={propositionDecorBlack}
              className={styles.propositionDecorBlack}
              alt="decorative element"
            />
          </div>
          {proposition}
        </h3>
        <div className={styles.videoWrapper}>
          <Video video={video} />
        </div>
      </section>
      <section className={styles.heroSectionProposition}>{viewSlider}</section>
    </>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  proposition: PropTypes.string,
  propositionList: PropTypes.array,
  heroBg: PropTypes.array
}

export default Hero
