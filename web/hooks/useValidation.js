import {useState, useEffect} from 'react'

const useValidation = (value, validations) => {
  const emptyErrorInitial = 'The field is empty'
  const emailErrorInitial = 'The entered email is invalid'
  const [emptyError, setEmptyError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isValidInput, setValidInput] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'empty':
          value ? setEmptyError('') : setEmptyError(emptyErrorInitial)
          break
        case 'email':
          const re = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/ // eslint-disable-line
          !re.test(String(value).toLowerCase())
            ? setEmailError(emailErrorInitial)
            : setEmailError('')
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (emptyError || emailError) {
      setValidInput(false)
    } else {
      setValidInput(true)
    }
  }, [emptyError, emailError])

  return {isValidInput, emptyError, emailError}
}
export default useValidation
