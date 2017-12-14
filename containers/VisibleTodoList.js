import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/Todos/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  ({todos, visibilityFilter}) => {
    console.log('connect is running')
    return {
      todos,
      visibilityFilter
    }
  },
  {onTodoClick: toggleTodo}
)(TodoList)

export default VisibleTodoList
