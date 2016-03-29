import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../css/styles.css';

import chessApp from './reducers/reducers';

import App from './components/App';

import io from 'socket.io-client';

var socket = io.connect('http://localhost:3001');

socket.on('move', function (data) {
  	socket.emit('my other event', { my: 'data' });
});

let store = createStore(chessApp);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementsByClassName('root')[0]);

