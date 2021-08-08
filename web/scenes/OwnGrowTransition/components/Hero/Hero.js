import styles from './hero.module.scss'
import PropTypes from 'prop-types'
import Video from '@/components/Video'

const Hero = ({hero, decor}) => {
  const {title, description, pageQuestions, video} = hero

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.questionsWrapper}>
        {pageQuestions.map((item, idx) => {
          return (
            <span className={styles.question} key={idx}>
              {item}
            </span>
          )
        })}
      </div>
      {description && <span className={styles.description}>{description}</span>}{' '}
      <div className={styles.videoWrapper}>
        <Video video={video} />
      </div>
      {decor}
    </section>
  )
}

Hero.propTypes = {
  pageQuestions: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.object
}

export default Hero
