import React from 'react';
const {Component} = React;

class AddButton extends Component {
    constructor() {
        super();
    }
    handleClick() {
        // var val = this.refs.inputName.getDOMNode().value;
        console.log(this.refs.inputName);
    }
    render() {
        return <button onClick={this.handleClick.bind(this)}>新增</button>;
    }
}

export default AddButton;