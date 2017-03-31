module.exports = function(app){
	var io = require('socket.io').listen(app);
	
	io.set('origins','*:*');
	console.log('data');
	
	io.sockets.on('connection', function(socket){
	console.log('data ok');
	socket.emit('message', 'Hello!!!');
	//socket.on('client event', function (data) 

		/*socket.on('message', function(text, cb){
			socket.broadcast.emit
		})*/
	})
}