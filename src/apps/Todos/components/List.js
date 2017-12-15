import React from 'react'

const List = ({todoList, finishTodo, filter}) => (
  <ul>
    {
      todoList.map(todo => {
        if (!todo.finished && filter === 'Compelete') return null;
        if (todo.finished && filter === 'Todo') return null;
        return (
          <li
            style={todo.finished ? {'textDecorationLine': 'line-through'} : null}
            key={todo.index}
            onClick={() => finishTodo(todo)}
          >
            {todo.content}
          </li>
        )
      })
    }
  </ul>
)

export default List
