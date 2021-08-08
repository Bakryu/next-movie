import COLORS from '@/constants/colors'
import DecorElement from '@/components/DecorElement'

import styles from './decor.module.scss'
const FormDecor = () => {
  return (
    <>
      <div className={styles.leftGroup}>
        <DecorElement color={COLORS.MILK} />
      </div>
      <div className={styles.centralGroup}>
        <DecorElement color={COLORS.WHITE} />
        <DecorElement color={COLORS.MILK} />
      </div>
      <div className={styles.rightGroup}>
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.MILK} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
    </>
  )
}

export default FormDecor
