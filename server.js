const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(9000);
const io = require('socket.io')(server);
var path = require("path");
var counter = 0;
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))

app.get('/', (req, res) => {
    res.render('index');
})

io.sockets.on('connection', function (socket) {
    
    socket.on('pink', function () {
        color = 'pink'
        io.emit('addcolor', {color: color})
    })
    socket.on('black', function () {
        color = 'black'
        io.emit('addcolor', {color: color})
    })
    socket.on('red', function () {
        color = 'red'
        io.emit('addcolor', {color: color})
    })

});