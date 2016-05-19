import  React,{Component} from 'react';

import InputName from '../InputName/index';
import AddButton from '../AddButton/index';
import ItemList from '../ItemList';

class AddBar extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler() {
        var inputVal = this.refs.inputName.state.value;
        this.setState({inputVal: ""});
    }
    render() {
        var listArr = ["123123","44444444444"];
        return (
            <div>
                <InputName ref="inputName" defaultVal="Hello!" />
                <AddButton onClick={this.clickHandler.bind(this)} />
                <ItemList list={listArr} />
            </div>
        );
    }
}

export default AddBar;