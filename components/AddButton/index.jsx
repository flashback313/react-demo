import React from 'react';
const {Component} = React;

class AddButton extends Component {
    constructor() {
        super();
    }
    render() {
        return (<button onClick={this.props.onClick}>新增</button>);
    }
}

export default AddButton;