import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './bottomDecor.module.scss'

const BottomDecor = () => {
  return (
    <>
      <div className={styles.left}>
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.YELLOW} />
      </div>

      <div className={styles.right}>
        <DecorElement color={COLORS.BROWN} />
      </div>
    </>
  )
}

export default BottomDecor
