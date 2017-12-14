import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import testMiddleWare from './middleware/test'
import test2MiddleWare from './middleware/test2'

import App from './components/Todos/App'

let createStoreWithMiddleware = applyMiddleware(testMiddleWare, test2MiddleWare)(createStore)
let store = createStoreWithMiddleware(todoApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('appwrap')
);