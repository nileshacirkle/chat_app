var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 4000;
var users = new Array(100);

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html');
});




io.on('connection', function (socket) {

  //  console.log(socket.handshake.query.email);

    socket.on('send', function (msg_data) {
        io.emit('receive', msg_data);
    });
});


http.listen(port, function () {
    console.log('listening on *:' + port);
});


