import  {Component} from 'react';

import InputName from '../InputName/index';
import AddButton from '../AddButton/index';

class AddBar extends Component {
    constructor() {
        super();
    }
    clickHandler() {
        var inputName = this.refs.inputName;
        this.setState(null);
    }
    render() {
        return (<div><InputName ref="inputName" /><AddButton onClick={this.clickHandler.bind(this)} /></div>);
    }
}

export default AddBar;