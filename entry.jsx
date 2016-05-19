import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'


// import LikeButton from './components/LikeButton/index';
// import Avatar from './components/Avatar/index';
// import InputName from './components/InputName/index';
// import AddButton from './components/AddButton/index';
// import AddBar from './components/AddBar/index';
// import TitleChange from './components/TitleChange/index';
import App from './components/Todos/App'

let store = createStore(todoApp)
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('appwrap')
);
// import AddBar from './components/AddBar/index';
// import TitleChange from './components/TitleChange/index';

// var titleContext = "My Title Component";
// render(
//     <AddBar />,
//     document.getElementById('appwrap')
// );
// render(
//     <TitleChange title="My Title Component" />,
//     document.getElementById('appwrap')
// );