var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.init;
handle['/init'] = requestHandlers.init;
handle['/upload'] = requestHandlers.upload;

server.initHttp(router.route, handle);