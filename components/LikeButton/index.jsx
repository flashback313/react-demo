import React from 'react';
 
class LikeButton extends React.Component {
    handleClick(e) {
        this.setState({liked: !this.state.liked});
    }
    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick.bind(this)}>
                You {text} this. Click to toggle.
            </p>
        );
    }
    constructor() {
        super();
        this.state = {
            liked: false
        };
    }
    
}

export default LikeButton;