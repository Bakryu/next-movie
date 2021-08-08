import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './linkTo.module.scss'
const LinkTo = ({link = '', linkName, style}) => {
  return (
    <Link href={link}>
      <a className={classNames(styles.linkName, styles[style])}>
        {linkName}
        <div className={styles.arrowsWrapper}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8 10.5132L6.22984 12L12 6L6.22984 0L4.8 1.48679L8.14864 4.96882L0 4.96882L0.0448033 7.03119L8.14864 7.03118L4.8 10.5132Z"
              fill="
              #323232"
            />
          </svg>
        </div>
      </a>
    </Link>
  )
}

export default LinkTo
