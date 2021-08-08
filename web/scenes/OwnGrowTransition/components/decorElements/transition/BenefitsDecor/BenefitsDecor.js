import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './benefitsDecor.module.scss'

const BenefitsDecor = () => {
  return (
    <>
      <div className={styles.left}>
        <DecorElement color={COLORS.MILK} />
        <DecorElement color={COLORS.MILK} />
      </div>
      <div className={styles.middle}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.BROWN} />
      </div>
      <div className={styles.right}>
        <DecorElement color={COLORS.SPIRIT} />
      </div>
    </>
  )
}

export default BenefitsDecor
