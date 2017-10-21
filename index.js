const http = require('http');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static('static'));

app.get('/', function (req, res) {


});


io.on('connection', function (socket) {


});

server.listen(3000, function () {
    console.log('Listening on localhost:3000');
})