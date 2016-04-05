import React,{Component} from 'react';


class InputName extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.defaultVal}
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