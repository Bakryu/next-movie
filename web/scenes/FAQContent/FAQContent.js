import PropTypes from 'prop-types'
import FAQItem from './components/FAQItem'
import DecorElement from './components/DecorElement'

import styles from './faqContent.module.scss'

const FAQContent = ({faqContent}) => {
  const {title, list} = faqContent
  return (
    <section className={styles.faq}>
      <h1 className={styles.title}>{title}</h1>
      {list.map((item, idx) => {
        return <FAQItem item={item} key={idx} />
      })}
      <DecorElement />
    </section>
  )
}

FAQContent.propTypes = {
  faqContent: PropTypes.object
}
export default FAQContent
