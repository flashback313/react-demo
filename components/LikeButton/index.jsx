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
    constructor(props) {
        super(props);
        this.state = {count: props.liked};
    }
    
}
LikeButton.propTypes = { liked: React.PropTypes.number };
LikeButton.defaultProps = { liked: 0 };

export default LikeButton;