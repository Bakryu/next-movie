import getDefaultFilter from '@/helpers/getDefaultFilter'

function reducer(state, action) {
  const defaultFilter = getDefaultFilter(state[action.payload])
  switch (action.type) {
    case 'all':
      return {...state, [action.payload]: {...defaultFilter}}
    case 'category':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          all: false,
          [action.name]: !state[action.payload][action.name]
        }
      }
    case 'reset':
      return {
        ...state,
        ...action.payload
      }
    default:
      return {
        ...state
      }
  }
}
export default reducer
