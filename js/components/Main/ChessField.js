import React from 'react';

import fieldInstance from '../../fieldInstance';
import FigureDraggable from './FigureDraggable';

export default class ChessField extends React.Component {
	constructor(props) {
		super(props);
	}

	moveFigureToCell(oldPos, pos) {
		var objOld = Object.assign({}, this.props.field);
		var obj = Object.assign({}, this.props.field);
		var figureCopy = obj.data[oldPos.y][oldPos.x].figure;
		
		obj.data[pos.y][pos.x].figure = figureCopy;
		obj.data[oldPos.y][oldPos.x].figure = null;

		setTimeout(() => {
			this.props.actions.moveFigureToCell(objOld, obj);
		});
	}

	moveFigureBack(oldPos) {
		var obj = Object.assign({}, this.props.field);
		var figureCopy = Object.assign({}, obj.data[oldPos.y][oldPos.x].figure);
		obj.data[oldPos.y][oldPos.x].figure = null;

		setTimeout(() => {
			this.props.actions.moveFigureBack(obj);

			var obj2 = Object.assign({}, this.props.field);
			var figureClone = fieldInstance.initCtrl.getFigureByPosition(figureCopy.initPos);
			figureClone.move({x: oldPos.x, y: oldPos.y});
			obj2.data[oldPos.y][oldPos.x].figure = figureClone;

			this.props.actions.moveFigureBack(obj2);
		});
	}

	renderLettersLine() {
		return <div className='letters-line'>
			{this.renderLettersField()}
			{this.props.field.letters.map((result, i) => {
				return this.renderLettersField(result, i)
			})}
		</div>
	}

	renderLettersField(data, key) {
		return <div className="letters-field figure" key={key}>{data}</div>
	}

	renderChessLines() {
		return this.props.field.data.map((result, i) => {
		  	return <div className="chess-line" key={i}>
		  		{this.renderLettersField(8-i)}
			 	{result.map((res, j) => {
			 		return this.renderChessCell(res, j)
			 	})}
			 	{this.renderLettersField(8-i)}
			</div>
		})
	}

	renderChessCell(res, key) {
		var cellClass = "chess-field " + res.class;

		return <div className={cellClass} data-x={res.x} data-y={res.y} key={key}>
			{res.figure ? this.renderFigure(res) : null}
		</div>
	}

	renderFigure(res) {
		return <FigureDraggable opts={res} 
				field={this.props.field} 
				options={this.props.options}
				moveFigureToCell={this.moveFigureToCell.bind(this)}
				moveFigureBack={this.moveFigureBack.bind(this)} />
	}

	render() {
		return ( 
			<div className="chess-area">
				{this.renderLettersLine()}
				{this.renderChessLines()}
				{this.renderLettersLine()}
			</div>
		);
	}
}