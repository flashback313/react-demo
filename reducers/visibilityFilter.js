import { handleActions } from 'redux-actions'
import { SET_VISIBILITY_FILTER } from '../actions'

const visibilityFilter = handleActions({
  [SET_VISIBILITY_FILTER]: (state, { payload }) => payload.filter
}, 'SHOW_ALL')

export default visibilityFilter
