import React from 'react';
const {Component} = React;


class DemoComponent extends Component {
    render() {
        return (
            <div>
                I'm a component.
            </div>
        )
    }
}
class Title extends Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
class OnOffButton extends Component {
    constructor() {
        super();
        this.state = { value: true };
    }
    handleClick() {
        this.setState({ value: !this.state.value });
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.value ? 'On' : 'Off'}</button>
        );
    }
}


export default class TitleChange extends Component {
    constructor(props) {
        super(props);
        this.state = {title: this.props.title}
    }
    handleClick() {
		this.setState({title: this.state.title + "."});  	
    }
    render() {
        return (
            <div>
                <Title title={this.state.title} />
                <DemoComponent />
                <br />
                <OnOffButton />
                <br />
                <button onClick={this.handleClick.bind(this)}>Change Title</button>
            </div>
        );
    }
}
