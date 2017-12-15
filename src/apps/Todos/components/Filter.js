import React from 'react'

const btnStyle = {
  'marginRight': '10px'
}

const Filter = ({ onFilterChange }) => (
  <div>
    <button style={btnStyle} onClick={() => onFilterChange('All')}>All</button>
    <button style={btnStyle} onClick={() => onFilterChange('Compelete')}>Compelete</button>
    <button style={btnStyle} onClick={() => onFilterChange('Todo')}>Todo</button>
  </div>
)
export default Filter
