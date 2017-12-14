import { createAction } from 'redux-actions'

export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 0
export const addTodo = createAction(ADD_TODO, text => ({
    id: nextTodoId++,
    text
  })
)


export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, filter => { filter })

export const toggleTodo = createAction(TOGGLE_TODO, id => { id });
