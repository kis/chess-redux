import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../css/styles.css';

import chessApp from './reducers/reducers';

import App from './components/App';

let store = createStore(chessApp);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementsByClassName('root')[0]);

