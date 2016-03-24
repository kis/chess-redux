import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

import Field from '../components/Logic/Field';

var gameInit = {
  started: false
};

function options(state = gameInit, action) {
  switch (action.type) {
    case 'START_GAME':
      return {...state, started: true};

    case 'END_GAME':
      return {...state, started: false};

    default:
      return {...state};
  }
}

var fieldInit = new Field();

function field(state = fieldInit, action) {
  switch (action.type) {
    case 'GET_FIELD':
      return {...state};

    case 'MOVE_FIGURE_TO_CELL':
      return {...state, data: action.field.data, black: !action.field.black};

    case 'MOVE_FIGURE_BACK':
      return {...state, data: action.oldField.data};

    default:
      return {...state};
  }
}

const chessApp = combineReducers({
  options,
  field
});

export default chessApp;