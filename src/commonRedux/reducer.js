import { combineReducers } from 'redux';
import { REFRESH } from './actions';
import { connectRouter } from 'connected-react-router';

const baseInfo = (state, action) => {
  switch (action.type) {
    case REFRESH:
      return {
        name: 'alex'
      };
    default:
      return {};
  }
};

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    baseInfo: baseInfo
  });

export default rootReducer;
