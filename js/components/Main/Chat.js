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
			var objDiv = document.getElementsByClassName("chat-message-box")[0];
			objDiv.scrollTop = objDiv.scrollHeight;
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