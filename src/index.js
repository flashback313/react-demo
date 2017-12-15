import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as todoApp from './apps/Todos/controls/reducer'
import testMiddleWare from './middleware/test'
import test2MiddleWare from './middleware/test2'

import App from './apps/Todos/containers/AppContainer'

let createStoreWithMiddleware = applyMiddleware(testMiddleWare, test2MiddleWare)(createStore)
let store = createStoreWithMiddleware(combineReducers(todoApp))

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('appwrap')
);