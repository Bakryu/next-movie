import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './topDecor.module.scss'

const TopDecor = () => {
  return (
    <>
      <div className={styles.left}>
        <DecorElement color={COLORS.YELLOW} />
      </div>
      <div className={styles.middle}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.GREEN} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
      <div className={styles.right}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.YELLOW} />
        <DecorElement color={COLORS.RED} />
      </div>
    </>
  )
}

export default TopDecor
