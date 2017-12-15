import React from 'react'
import Add from './Add'
import List from './List'
import Filter from './Filter'

export default class App extends React.PureComponent {
  render() {
    const { addTodo, todoList, finishTodo, filter, onFilterChange } = this.props;
    return (
      <div>
        <Add addTodo={addTodo} />
        <List todoList={todoList} finishTodo={finishTodo} filter={filter} />
        <Filter filter={filter} onFilterChange={onFilterChange} />
      </div>
    );
  }
}