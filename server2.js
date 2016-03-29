var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3001, "127.0.0.1");

app.get('/', function (req, res) {
	console.log('Listening at localhost:3001')
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log('connected')
	socket.emit('move', { hello: 'world' });
	socket.on('my other event', function (data) {
	  console.log(data);
	});
});