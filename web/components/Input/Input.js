import classNames from 'classnames/bind'

import StaticImage from '@/components/StaticImage'
import question from '@/public/image/question.png'
import styles from './input.module.scss'

const Input = ({name, placeholder, value, onChange, onBlur, isDirty, emptyError, emailError}) => {
  let error = emptyError || emailError

  return (
    <label className={styles.label}>
      {!isDirty && error && (
        <div className={classNames(styles.error, styles.labelError)}>
          <div className={styles.errorImage}>
            <StaticImage link={question} alt="question" />
          </div>
          <span className={styles.errorText}>{error}</span>
        </div>
      )}
      <input
        className={classNames(styles.input, !isDirty && error && styles.inputError)}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e)
        }}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </label>
  )
}

export default Input
