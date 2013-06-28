// var io = require('socket.io').listen(3001);

// io.set('log level', 1);

// // Search query
// exports.console = function(msg, calback) {

// 	io.sockets.on('connection', function(socket) {
// 		console.log("console s");
// 		socket.emit('cmd', { console: 'world' });
// 	});
// 	console.log(msg);
// }


// // Websocket Server
// io.sockets.on('connection', function(socket) {

// 	console.log('Page client connected'); 
//   	socket.emit('cmd', { console: 'world' });
// 	socket.on('cmd', function(data) {
// 		data.console = data.console + "OK";
// 		socket.emit('cmd', data);
// 	});


// 	// //광해 
// 	// client.on('actor', function(data) {
// 	// 	mysql.actor(data.query, function(rows) {
// 	// 		client.emit('result', rows);
// 	// 	});
// 	// });

// 	// // Client(web browser) send
// 	// mysql.get_employees(function(employees) {
// 	// 	client.emit('populate', employees);
// 	// });

// 	// // Cocket server to webbrowser
// 	// client.on('add employee', function(data) {
// 	// 	// create employee, when its done repopulate employees on client
// 	// 	mysql.add_employee(data, function(lastId) {
// 	// 		// repopulate employees on client
// 	// 		mysql.get_employees(function(employees) {
// 	// 			client.emit('populate', employees);
// 	// 		});
// 	// 	});
// 	// });
// });


// // io.sockets.on('connection', function(socket) {

// //   // on public
// //   socket.on('join', function (data) {
// //     io.sockets.emit('join', socket.id, data);
// //   });

// //   // on broadcast
// //   socket.on('message', function (data) {
// //     socket.broadcast.emit('message', socket.id, data);
// //   });

// //   // on privat
// //   socket.on('whisper', function (id, data, fn) {
// //     if (id && io.sockets.sockets[id]) {
// //       io.sockets.sockets[id].emit('whisper', socket.id, data);
// //       fn(true);
// //     } else {
// //       fn(false);
// //     }
// //   });

// //   socket.on('disconnect', function () {
// //     socket.broadcast.emit('close', socket.id);
// //   });

// // });
