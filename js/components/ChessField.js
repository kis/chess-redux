import React from 'react';

import Figure from './Figure';

export default class ChessField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.field.data
		};
	}

	/*_onChange() {
		setTimeout(() => {
			this.setState({data: ChessStore.getField().data});
		}, 100);
	}*/

	moveFigureToCell(data, oldPos, pos) {
		this.props.actions.moveFigureToCell({
			data: data,
			oldPos: oldPos,
			pos: pos
		});
	}

	repaintCell(data, oldPos) {
		this.props.actions.repaintCell({
			data: data,
			oldPos: oldPos
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
		return this.state.data.map((result, i) => {
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

		var opts = {
			moveFigure: this.moveFigureToCell.bind(this, this.state.data),
			repaintCell: this.repaintCell.bind(this, this.state.data)
		};

		return <div className={cellClass} data-x={res.x} data-y={res.y} key={key}>
			{res.figure ? this.renderFigure(res, opts) : null}
		</div>
	}

	renderFigure(res, opts) {
		return <Figure opts={res} 
				field={this.props.field} 
				moveFigureToCell={opts.moveFigure}
				repaintCell={opts.repaintCell} />
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