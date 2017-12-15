import React from 'react'

export default class Add extends React.PureComponent {
  state = {
    inputVal: ''
  }
  add() {
    const { addTodo } = this.props;
    addTodo(this.state.inputVal);
    this.setState({
      inputVal: ''
    })
  }
  onChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {
    const { inputVal } = this.state;
    return (
      <div>
        <input type="text" value={inputVal} onChange={this.onChange.bind(this)} />
        <button onClick={this.add.bind(this)}>add</button>
      </div>
    )
  }
}