import { combineReducers } from 'redux';

import * as actions from '../actions/actions';
import * as helpers from './helpers';

import Field from '../components/Logic/Field';

let initialState = new Field()

function field(state = initialState, action) {
  switch (action.type) {
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

const chessApp = combineReducers({
  field
})

export default chessApp;