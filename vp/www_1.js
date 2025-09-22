
const http = require("http");
const dateeT = require("./src/datetimeET.js");
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n<meta charset="utf-8">\n<h1>Title be here</h1>\n</head>\n<body>';
const pageBody =  '<h1>oogabooga</h1>\n<img src="https://greeny.cs.tlu.ee/~riri/cat.jpg" alt="There should be a cat here">\n<p>bdsjasjvhbsdjvbdjsvbjavb no useful information here, schoolwork thing <a href="https://www.tlu.ee">link to the school<a>\n</p>\n<p>\n<a href="https://greeny.cs.tlu.ee/~riri/newstufflink.html">test link</a></p>\n<hr>';
const pageFoot = '</body></!DOCTYPE html>';


http.createServer(function(req, res){
	
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBody);
	res.write("<p>Täna on " + dateeT.dateET() + "</p>");
	res.write(pageFoot);
	return res.end();
	
}).listen(5110);