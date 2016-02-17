// import { combineReducers } from 'redux';

import actions from '../actions/actions';
import helpers from './helpers';

import Field from '../components/Logic/Field';

function chess(state, action) {
  switch (action.type) {
    case actions.INIT_FIELD:
      return {
        field: new Field()
      }
    case actions.GET_FIELD:
      return {
        field: field
      }
    case actions.MOVE_FIGURE_TO_CELL:
      return {
        field: helpers.moveFigureToCell(field, action.data)
      }
    case actions.REPAINT_CELL:
      return {
        field: helpers.repaintCell(field, action.data)
      }
    default:
      return state
  }
}

export default chessApp;