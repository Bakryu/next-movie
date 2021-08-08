import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './headerDecor.module.scss'

const HeaderDecor = () => {
  return (
    <>
      <div className={styles.left}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.GREEN} />
      </div>
      <div className={styles.right}>
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
    </>
  )
}

export default HeaderDecor
