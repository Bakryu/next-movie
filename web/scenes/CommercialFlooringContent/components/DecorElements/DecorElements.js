import classNames from 'classnames/bind'
import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './decorElements.module.scss'

const DecorElements = () => {
  return (
    <>
      <div className={styles.left}>
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.BROWN} />
      </div>
      <div className={styles.right}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.YELLOW} />
        <DecorElement color={COLORS.RED} />
      </div>
      <div className={styles.yellow}>
        <DecorElement color={COLORS.YELLOW} />
      </div>
      <div className={classNames(styles.spiritGroup, styles.item1)}>
        <DecorElement color={COLORS.DIM} />
        <DecorElement color={COLORS.DIM} />
      </div>
      <div className={classNames(styles.spiritGroup, styles.item2)}>
        <DecorElement color={COLORS.DIM} />
        <DecorElement color={COLORS.DIM} />
      </div>
      <div className={classNames(styles.spiritGroup, styles.item3)}>
        <DecorElement color={COLORS.DIM} />
        <DecorElement color={COLORS.DIM} />
      </div>
      <div className={classNames(styles.spiritGroup, styles.item4)}>
        <DecorElement color={COLORS.DIM} />
        <DecorElement color={COLORS.DIM} />
      </div>
    </>
  )
}

export default DecorElements
