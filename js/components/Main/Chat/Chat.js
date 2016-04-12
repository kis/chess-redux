import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

import * as api from '../../../api/api'; 

import './chat.css';

class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	scrollBottom() {
		var objDiv = document.getElementsByClassName("chat-message-box")[0];
		if (objDiv) {
			objDiv.scrollTop = objDiv.scrollHeight;
		}
	}

	enterHandler(e) {
		if (e.keyCode === 13) {
			var msg = e.target.value;
			if (msg) {
				api.newMessage(this.props.options.userName, msg);
				e.target.value = null;
				this.scrollBottom();
			}
		}
	}

	componentDidUpdate() {
		this.scrollBottom();
	}

	render() {
		var room = this.props.options.rooms ? this.props.options.rooms.find((el, i, arr) => {
			return el.id == this.props.options.roomId;
		}) : null;

		var messageToRight = (result) => {
			return (result.user !== this.props.options.userName) ? 'chat-msg-item to-right' : 'chat-msg-item';
		};

		return ( 
			<div className='chat'>
				<div className='rooms-box'>
					{this.props.options.rooms.map((room, i) => {
						return <span key={i}>#{room.title}</span>;
					})}
				</div>
				<div className='chat-message-box'>
					{room ? room.messages.map((result, i, arr) => {
						return <div className={messageToRight(result)} key={i}>
							{result.user ? <div className='msg-user'>{result.user.toUpperCase()}</div> : null}
							<span className='msg'>{result.msg}</span>
						</div>;
					}) : null}
				</div>
				<input className='chat-input' 
					   onKeyUp={this.enterHandler.bind(this)}
					   type='text' 
					   name='message' 
					   placeholder='Write message...' />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  options: state.options
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);