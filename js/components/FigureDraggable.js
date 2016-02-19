import React from 'react';

import Draggable, {DraggableCore} from 'react-draggable';

const CellWidth = 90;

export default class FigureDraggable extends React.Component {
	constructor(props) {
		super(props);

		this.dragOptions = {
			bounds: {
				left: -90*this.props.opts.x,
				top: -90*this.props.opts.y,
				right: 90*(7-this.props.opts.x), 
				bottom: 90*(7-this.props.opts.y)
			},
			grid: [CellWidth, CellWidth]
		};
	}

	getMoveStatus(elData, pos) {
	    var currentField = this.props.field.data[pos.y][pos.x];
	    var isValidMove = elData.figure.isValidMove(pos);

	    var oursFigure = currentField.figure ? elData.figure.color == currentField.figure.color : null;
	    var status = null;

	    if (!currentField.figure) {
	        status = {id: 1, valid: isValidMove, info: "move to empty cell"};
	    } else if (!oursFigure) {
	        status = {id: 2, valid: isValidMove, info: "move to enemy's cell"};
	    } else if (oursFigure) {
	        status = {id: 2, valid: isValidMove, info: "move to cell with your figure"};
	    }    

	    return status;       
	}

	dropFigure(elData, e, data) {
		let transform = data.node.style.transform;
		let arr = transform.match(/(-)?\d{1,3}/g);
		let [a, b] = arr;
		let [deltaX, deltaY] = [a/90, b/90];
		var {x, y} = elData.figure.pos;
		let [newX, newY] = [x+deltaX, y+deltaY];
		this.processMoving(elData, {x: newX, y: newY});
	}

	processMoving(elData, pos) {
		var moveStatus = this.getMoveStatus(elData, pos);
		var isValidMove = moveStatus.valid;
		let oldPos = Object.assign({}, elData.figure.pos);

		if (!isValidMove) {
			this.props.repaintCell(oldPos);
		} else {
			elData.figure.move(pos);
			this.props.moveFigureToCell(oldPos, pos);
		}
	}

	render() {
		var dropFigure = this.dropFigure.bind(this, this.props.opts);

		return <Draggable onStop={dropFigure} grid={this.dragOptions.grid} bounds={this.dragOptions.bounds}>
			<div className='figure' dangerouslySetInnerHTML={{__html: this.props.opts.figure ? this.props.opts.figure.code : null}}></div>
		</Draggable>;
	}
}