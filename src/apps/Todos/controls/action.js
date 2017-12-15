import { createAction } from 'redux-actions'

export const ADD_TODO = 'ADD_TODO'
export const FINISH_TODO = 'FINISH_TODO'
export const FILTER_CHANGE = 'FILTER_CHANGE'

export const addTodo = createAction(ADD_TODO, todo => todo)

export const finishTodo = createAction(FINISH_TODO, todo => todo)

export const onFilterChange = createAction(FILTER_CHANGE, filter => filter)
