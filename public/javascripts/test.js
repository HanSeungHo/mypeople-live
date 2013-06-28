$(document).ready(function() {


    var socket = io.connect('http://localhost:3001');

    // Page add
    socket.on('cmd', function(data) {
        console.log(data);
        if (data) {
            for (i in data) {
                var out = "" + "<li>" + data.console + "</li>";
                $('#cmd').append(out);
            }

        }
    });


    $("#btn").click(function(){
        console.log("ets");
        socket.emit('cmd', { console: 'world' });
    });


});