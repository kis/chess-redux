import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

import Field from '../components/Logic/Field';
import fieldInstance from '../fieldInstance';

var options = {
  started: false,
  figure: 'Black'
};

var init = {
  field: fieldInstance, 
  options: options
};

function game(state = init, action) {
  switch (action.type) {
    case actions.START_GAME:
      return {...state};
    case actions.RESTART_GAME:
      return {...state};
    case actions.GET_FIELD:
      return {...state};
    case actions.MOVE_FIGURE_TO_CELL:
      return {...state, data: action.data};
    case actions.REPAINT_CELL:
      return {...state, data: action.data};
    default:
      return {...state};
  }
}

const chessApp = combineReducers({
  game
});

export default chessApp;