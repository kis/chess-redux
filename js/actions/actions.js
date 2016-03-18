export function startGame() {
  return {
    type: 'START_GAME'
  }
}

export function restartGame() {
  return {
    type: 'RESTART_GAME'
  }
}

export function initField() {
  return {
    type: 'INIT_FIELD'
  }
}

export function getField() {
  return {
    type: 'GET_FIELD'
  }
}

export function moveFigureToCell(data) {
  return {
    type: 'MOVE_FIGURE_TO_CELL',
    data
  }
}

export function repaintCell(data) {
  return {
    type: 'REPAINT_CELL',
    data: data
  }
}