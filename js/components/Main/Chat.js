import React from 'react';

export default class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return ( 
			<div className='chat'>
				<div className='chat-message-box'></div>
				<input className='chat-input' placeholder="Write message..." />
			</div>
		);
	}
}