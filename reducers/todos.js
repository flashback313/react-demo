import { handleActions } from 'redux-actions'
import { ADD_TODO, TOGGLE_TODO } from '../actions'

const todos = handleActions({
  [ADD_TODO]: (state, { payload }) => {
    return [...state, {
      id: payload.id,
      text: payload.text,
      completed: false
    }]
  },
  [TOGGLE_TODO]: (state, action) => {
    return state.map(t => {
      if (t.id !== payload.id) {
        return t
      }

      return Object.assign({}, t, {
        completed: !t.completed
      })
    })
  }
}, [])

export default todos
