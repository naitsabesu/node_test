var http = require('http'),
	url	 = require('url');

function initHttp(route, handler){
	var onRequest = function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log('Peticion recibida para: '+ pathname);

		var content = route(handler, pathname);

		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(content);
		res.end();
	};

	http.createServer(onRequest).listen(8888);
	console.log('Servidor iniciado');
}

exports.initHttp = initHttp;