import React from 'react';
import ReactDOM from 'react-dom';


import LikeButton from './components/LikeButton/index';
import Avatar from './components/Avatar/index';
import InputName from './components/InputName/index';
import AddButton from './components/AddButton/index';
ReactDOM.render(
  <div>
    <InputName />
    <AddButton />
  </div>,
  document.getElementById('appwrap')
);