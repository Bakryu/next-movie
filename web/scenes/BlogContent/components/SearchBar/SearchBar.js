import PropTypes from 'prop-types'
import useResize from 'use-resizing'
import StaticImage from '@/components/StaticImage'
import Button from '@/components/buttons/Button'
import COLORS from '@/constants/colors'
import SCREEN_SIZE from '@/constants/screenSize'
import search from '@/public/image/search.svg'
import searchWhite from '@/public/image/search-white.svg'
import styles from './searchBar.module.scss'

const SearchBar = ({formValue, setFormValue, onSubmit, button}) => {
  const screenSize = useResize()
  const text = screenSize.width >= SCREEN_SIZE.MOBILE ? button : null
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.inputLabel}>
        <StaticImage link={search} alt="search" />
        <input
          placeholder="SEARCH BY MATCH"
          value={formValue}
          onChange={({target}) => {
            setFormValue(target.value)
          }}
        />
      </label>
      <Button type="submit" color={COLORS.BLACK} text={text} image={searchWhite} />
    </form>
  )
}

SearchBar.propTypes = {
  formValue: PropTypes.string,
  setFormValue: PropTypes.func,
  onSubmit: PropTypes.func,
  button: PropTypes.string
}
export default SearchBar
