const http = require('http');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const requestify = require('requestify');

app.use(express.static('static'));

app.get('/', function (req, res) {


});


io.on('connection', function (socket) {
    console.log("client connected");
    socket.on('confirm-code',function(data){
        console.log(data.region_code)
        if(data.region_code == "DEBUG"){
            console.log("Valid login");
            socket.emit('valid-login',true);
        }
        else{
            console.log('Invalid Login');
            socket.emit('valid-login',false);
        }  
            
    });

});

server.listen(3000, function () {
    console.log('Listening on localhost:3000');
})