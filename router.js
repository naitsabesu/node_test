var route = function(handle, pathname, response){
	console.log('A punto de rutear una peticion para '+ pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname](response);
	}else{		
		console.log('No se encontro handler para '+pathname);
		response.writeHead(404, {'content-type':'text/html'});
		response.write('404 - Page not found');
		response.end();
	}

};
exports.route = route;