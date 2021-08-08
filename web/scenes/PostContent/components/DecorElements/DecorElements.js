import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './decorElements.module.scss'

const DecorElements = () => {
  return (
    <>
      <div className={styles.first}>
        <DecorElement color={COLORS.YELLOW} />
        <DecorElement color={COLORS.BROWN} />
      </div>

      <div className={styles.second}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.GREEN} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
      <div className={styles.third}>
        <DecorElement color={COLORS.GREEN} />
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
      <div className={styles.fourth}>
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.YELLOW} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
    </>
  )
}

export default DecorElements
