import React from 'react';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

const FIGURES = {
	black: 'Black',
	white: 'White'
};

export default class Options extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	start() {
		var name = document.getElementById('user-name').value;
		var room = document.getElementById('room').value;
		if (name && room) {
			this.props.actions.startGame(name, room);
		}
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
				<ul>
					<li><Link to="/chat" activeStyle={{ color: 'red' }}>Chat</Link></li>
					<li><Link to="/chess" activeStyle={{ color: 'red' }}>Chess</Link></li>
				</ul>

				<div className={startStyle}>
					<input className="input-style" id="user-name" type="text" placeholder="Your Name" /><br/><br/>
					<input className="input-style" id="room" type="text" placeholder="Room" /><br/><br/>
					<button onClick={start}>Start game</button>
				</div>
				<div className={endStyle}>
					<button onClick={end}>End game</button>
				</div>
				<div className={movingStyle}>{figure} is moving</div>
			</div>
		);
	}
}