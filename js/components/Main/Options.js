import React from 'react';

const FIGURES = {
	black: 'Black',
	white: 'White'
};

export default class Options extends React.Component {
	constructor(props) {
		super(props);
	}

	changeCurrentFigure() {
		var black = FIGURES.black,
			white = FIGURES.white;
	}

	start() {
		this.props.actions.startGame();
	}

	restart() {
		this.props.actions.restartGame();
	}

	render() {
		var movingStyle = this.props.options.started ? 'moving-style' : 'moving-style hidden';

		return (
			<div className="chess-options">
				<div className={movingStyle}>{this.props.options.figure} is moving</div>
				<div className="button-style">
					<button onClick={this.props.start}>Start</button>
				</div>
				<div className="button-style">
					<button onClick={this.props.restart}>Restart</button>
				</div>
			</div>
		);
	}
}