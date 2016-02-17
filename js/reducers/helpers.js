export function moveFigureToCell(field, eData) {
  var data = eData.data;
  var oldPos = eData.oldPos;
  var pos = eData.pos;

  var obj = Object.assign({}, data);
  var figureCopy = obj[oldPos.y][oldPos.x].figure;
  
  console.log(obj[oldPos.y][oldPos.x])
  
  data[pos.y][pos.x].figure = figureCopy;
  data[oldPos.y][oldPos.x].figure = null;

  field.data = data;
  return field;
}

export function repaintCell(field, eData) {
  var data = eData.data;
  var oldPos = eData.oldPos;

  var obj = Object.assign({}, data);
  var figureCopy = obj[oldPos.y][oldPos.x].figure;

  data[oldPos.y][oldPos.x].figure = null;
  field.data = data;

  setTimeout(() => {
    data[oldPos.y][oldPos.x].figure = figureCopy;
    field.data = data;
  }, 100);

  return field;
}