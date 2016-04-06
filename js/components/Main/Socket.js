
import io from 'socket.io-client';

export default class Socket {

	constructor() {
		this.host = (window.location.hostname.indexOf('localhost') !== -1) ? 
					'http://localhost:8080' : 
					'https://evening-basin-88080.herokuapp.com';

		this.socket = io.connect(this.host);
	}

	getSocket() {
		if (!this.socket) {
			this.socket = io.connect(this.host);
		}
		return this.socket;
	}

}

