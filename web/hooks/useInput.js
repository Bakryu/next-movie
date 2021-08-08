import {useState} from 'react'
import useValidation from './useValidation'
const useInput = (validations) => {
  const [value, setValue] = useState('')
  let [isDirty, setDirty] = useState(true)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onBlur = () => {
    setDirty(false)
  }

  return {value, onChange, onBlur, isDirty, setDirty, ...valid}
}
export default useInput
