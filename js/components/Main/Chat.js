import React from 'react';

export default class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	componentDidMount() {
		document.getElementsByClassName('chat-input')[0].addEventListener('keyup', this.enterHandler.bind(this));
	}

	componentWillUnMount() {
		document.getElementsByClassName('chat-input')[0].removeEventListener('keyup', this.enterHandler.bind(this));
	}

	enterHandler(e) {
		if (e.keyCode === 13) {
			this.props.actions.sendMessage(e.target.value);
			e.target.value = null;
		}
	}

	render() {
		return ( 
			<div className='chat'>
				<div className='chat-message-box'></div>
				<input className='chat-input' 
					   type='text' 
					   name='message' 
					   placeholder='Write message...' />
			</div>
			);
	}
}