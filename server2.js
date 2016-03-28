var app = require('express').createServer();
var io = require('socket.io')(app);

app.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('move', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});