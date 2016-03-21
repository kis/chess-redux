export function startGame() {
  return {
    type: 'START_GAME'
  }
}

export function endGame() {
  return {
    type: 'END_GAME'
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

export function moveFigureBack(data) {
  return {
    type: 'MOVE_FIGURE_BACK',
    data: data
  }
}