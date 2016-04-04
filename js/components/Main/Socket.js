
import io from 'socket.io-client';

export default class Socket {

	constructor() {
		this.socket = io.connect('http://localhost:3001');
	}

	getSocket() {
		if (!this.socket) {
			this.socket = io.connect('http://localhost:3001');
		}
		return this.socket;
	}

}

