var init = function(response){
	console.log('init');
	var body = '<html>'+
		'<head>'+
			'<meta charset="utf-8">'+
		'</head>'+
		'<body>'+
			'<form action="/subir" method="post">'+
				'<textarea id="text" rows="20" cols="20"></textarea>'+
				'<input type="submit" value="submit text" />'+
			'</form>'+
		'</body>'+
	'</html>';
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write(body);
	response.end();
};
var upload = function(response){
	console.log('upload');
	response.writeHead(200,{'content-type':'text/html'});
	response.write('Subir');
	response.end();		
};


exports.init = init;
exports.upload = upload;