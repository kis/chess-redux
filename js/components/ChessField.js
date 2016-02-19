import React from 'react';

import FigureDraggable from './FigureDraggable';

export default class ChessField extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props)
	}

	moveFigureToCell(oldPos, pos) {
		var obj = Object.assign({}, this.props.field);
		var figureCopy = obj.data[oldPos.y][oldPos.x].figure;
		
		obj.data[pos.y][pos.x].figure = figureCopy;
		obj.data[oldPos.y][oldPos.x].figure = null;

		setTimeout(() => {
			this.props.actions.moveFigureToCell(obj);
		});
	}

	repaintCell(oldPos) {
		var obj = Object.assign({}, this.props.field);
		var figureCopy = Object.assign({}, obj.data[oldPos.y][oldPos.x].figure);

		obj.data[oldPos.y][oldPos.x].figure = null;

		setTimeout(() => {
			this.props.actions.repaintCell(obj);
		});

		obj.data[oldPos.y][oldPos.x].figure = figureCopy;
		console.log(obj.data[oldPos.y][oldPos.x])

		setTimeout(() => {
			this.props.actions.repaintCell(obj);
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
		console.log(this.props)

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
				moveFigureToCell={this.moveFigureToCell.bind(this)}
				repaintCell={this.repaintCell.bind(this)} />
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