import React from 'react';
const {Component} = React;
class Avatar extends Component {
  render() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
        <InputName />
      </div>
    );
  }
}

class ProfilePic extends Component {
  render() {
    return (
      <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
    );
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <a href={'http://www.facebook.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
}


export default Avatar;