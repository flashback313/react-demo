import React,{Component} from 'react';


export default class ItemList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {
                    this.props.list.map(function(val) {
                        return <li key={val}>{val}</li>;
                    })
                }
            </ul>
        )
    }
}