import React from 'react';
import { refresh } from '../commonRedux/actions'
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { baseInfo } = this.props;
    return <div>Hello</div>;
  }
}


export default connect(
  ({
    baseInfo
  }) => ({
    baseInfo
  }),
  {
    refresh
  }
)(App)