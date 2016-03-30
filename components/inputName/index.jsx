import React from 'react';
const {Component} = React;

class InputName extends Component {
    constructor() {
        super();
        this.state = {value: 'Hello!'}
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        var value = this.state.value;
        return <input type="text" value={value} onChange={this.handleChange.bind(this)} />;
    }
}

export default InputName;