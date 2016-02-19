import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

import Field from '../components/Logic/Field';
import fieldInstance from '../fieldInstance';

function field(state = fieldInstance, action) {
  switch (action.type) {
    case actions.GET_FIELD:
      return state;
    case actions.MOVE_FIGURE_TO_CELL:
      return action.data;
    case actions.REPAINT_CELL:
      return action.data;
    default:
      return state;
  }
}

const chessApp = combineReducers({
  field
});

export default chessApp;