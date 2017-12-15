import { handleActions } from 'redux-actions'
import { ADD_TODO, FINISH_TODO, FILTER_CHANGE } from './action'

let todoIndex = 0

export const todoList = handleActions({
  [ADD_TODO]: (state, { payload }) => {
    return [...state, {
      content: payload,
      finished: false,
      index: todoIndex++
    }]
  },
  [FINISH_TODO]: (state, { payload }) => {
    return state.map(todo => {
      if (payload.index === todo.index) {
        return {
          ...payload,
          finished: !todo.finished
        }
      }
      return todo
    })
  }
}, [])

export const filter = handleActions({
  [FILTER_CHANGE]: (state, { payload }) => payload
}, 'All')
