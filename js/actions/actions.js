export const INIT_FIELD = 'INIT_FIELD';
export const GET_FIELD = 'GET_FIELD';
export const MOVE_FIGURE_TO_CELL = 'MOVE_FIGURE_TO_CELL';
export const REPAINT_CELL = 'REPAINT_CELL';

export function initField() {
  return {
    type: INIT_FIELD
  }
}

export function getField() {
  return {
    type: GET_FIELD
  }
}

export function moveFigureToCell(data) {
  return {
    type: MOVE_FIGURE_TO_CELL,
    data: data
  }
}

export function repaintCell(data) {
  return {
    type: REPAINT_CELL,
    data: data
  }
}