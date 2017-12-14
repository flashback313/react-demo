import React, { PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends React.PureComponent {
  render() {
    const { todos, onTodoClick } = this.props
    console.log(this.props);
    return (<ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>)
  }
}
  
export default TodoList
