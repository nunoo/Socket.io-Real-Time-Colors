$(document).ready(function () {
    var socket = io.connect();
    
    $('#pink').click(function(e){
        socket.emit('pink')
    })
    $('#black').click(function(e){
        socket.emit('black')
    })
    $('#red').click(function(e){
        socket.emit('red')
    })
    socket.on('addcolor', (data) =>{
        $('.body').css('background-color', data.color);
    })
})