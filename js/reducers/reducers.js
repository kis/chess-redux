import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

import Field from '../components/Logic/Field';
import fieldInstance from '../fieldInstance';

var init = {
  field: fieldInstance, 
  options: {
    started: false,
    black: true
  }
};

function game(state = init, action) {
  switch (action.type) {
    case 'START_GAME':
      var opts = Object.assign({}, state.options, {
        started: !state.options.started
      });
      return {...state, options: opts};

    case 'END_GAME':
      var opts = Object.assign({}, state.options, {
        started: false
      });
      return {...state, options: opts};

    case 'GET_FIELD':
      return {...state};

    case 'MOVE_FIGURE_TO_CELL':
      var opts = Object.assign({}, state.options, {
        black: !state.options.black
      });
      return {...state, field: action.data, options: opts};

    case 'MOVE_FIGURE_BACK':
      return {...state, field: action.data};

    default:
      return {...state};
  }
}

const chessApp = combineReducers({
  game
});

export default chessApp;