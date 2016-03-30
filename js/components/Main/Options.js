import React from 'react';

const FIGURES = {
	black: 'Black',
	white: 'White'
};

export default class Options extends React.Component {
	constructor(props) {
		super(props);
	}

	start() {
		this.props.actions.startGame();
	}

	end() {
		this.props.actions.endGame();
	}

	render() {
		var figure = this.props.field.black ? FIGURES.black : FIGURES.white;

		var movingStyle = this.props.options.started ? 'moving-style' : 'moving-style hidden';
		var startStyle = !this.props.options.started ? 'button-style' : 'button-style hidden';
		var endStyle = this.props.options.started ? 'button-style' : 'button-style hidden';

		var start = this.start.bind(this);
		var end = this.end.bind(this);

		return (
			<div className="chess-options">
				<div className={startStyle}>
					<button onClick={start}>Start</button>
				</div>
				<div className={endStyle}>
					<button onClick={end}>End</button>
				</div>
				<div className={movingStyle}>{figure} is moving</div>
			</div>
		);
	}
}