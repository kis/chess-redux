import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../css/styles.css';

import store from './store/store';

import App from './components/App';

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementsByClassName('root')[0]);

