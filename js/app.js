import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import chessApp from './reducers/reducers';

import App from './containers/App';

let store = createStore(chessApp);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementsByClassName('root')[0]);

