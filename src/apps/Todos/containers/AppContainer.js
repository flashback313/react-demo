import { connect } from 'react-redux'
import App from '../components/App'
import { addTodo, finishTodo, onFilterChange } from '../controls/action'

export default connect(({todoList, filter}) => {
  return {
    todoList,
    filter
  }
}, {
  addTodo,
  finishTodo,
  onFilterChange
})(App)