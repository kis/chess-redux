import React from 'react';

import Socket from './Socket';
var socket = new Socket();

export default class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	componentDidMount() {
		document.getElementsByClassName('chat-input')[0].addEventListener('keyup', this.enterHandler.bind(this));

		socket.getSocket().on('new message', (data) => {
			this.props.actions.sendMessage(data.msg);
			this.scrollBottom();
		});
	}

	componentWillUnMount() {
		document.getElementsByClassName('chat-input')[0].removeEventListener('keyup', this.enterHandler.bind(this));
	}

	scrollBottom() {
		var objDiv = document.getElementsByClassName("chat-message-box")[0];
		objDiv.scrollTop = objDiv.scrollHeight;
	}

	enterHandler(e) {
		if (e.keyCode === 13) {
			var msg = e.target.value;
			this.props.actions.sendMessage(msg);
			socket.getSocket().emit('new message', {user: 'u1', msg: msg});
			e.target.value = null;
			this.scrollBottom();
		}
	}

	render() {
		return ( 
			<div className='chat'>
				<div className='chat-message-box'>
					{this.props.messages.map((result, i) => {
						return <div className='chat-msg-item' key={i}>
							<div className='msg-user'>{result.user.toUpperCase()}</div>
							<span className='msg'>{result.msg}</span>
						</div>;
					})}
				</div>
				<input className='chat-input' 
					   type='text' 
					   name='message' 
					   placeholder='Write message...' />
			</div>
		);
	}
}