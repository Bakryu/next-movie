import DecorElement from '@/components/DecorElement'
import COLORS from '@/constants/colors'
import styles from './proposalDecor.module.scss'

const ProposalDecor = () => {
  return (
    <>
      <div className={styles.left}>
        <DecorElement color={COLORS.BROWN} />
        <DecorElement color={COLORS.YELLOW} />
      </div>
      <div className={styles.middle}>
        <DecorElement color={COLORS.YELLOW} />
        <DecorElement color={COLORS.GREEN} />
        <DecorElement color={COLORS.RED} />
      </div>
      <div className={styles.right}>
        <DecorElement color={COLORS.BLACK} />
        <DecorElement color={COLORS.YELLOW} />
        <DecorElement color={COLORS.MILK} />
      </div>
    </>
  )
}

export default ProposalDecor
