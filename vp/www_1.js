
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const pageBanner = '<img src="https://greeny.cs.tlu.ee/~riri/cat.jpg">'
const dateeT = require("./src/datetimeET.js");
const textRef = ("./txt/vanasopnad.txt")
const pageLink = '\n\t<p>Vaata <a href="/vanasonad">vanasonasid</a>. </p>';
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n<meta charset="utf-8">\n<h1>Title be here</h1>\n</head>\n<body>';
const pageBody =  '<h1>oogabooga</h1>\n<img src="https://greeny.cs.tlu.ee/~riri/cat.jpg" alt="There should be a cat here">\n<p>bdsjasjvhbsdjvbdjsvbjavb no useful information here, schoolwork thing <a href="https://www.tlu.ee">link to the school<a>\n</p>\n<p>\n<a href="https://greeny.cs.tlu.ee/~riri/newstufflink.html">test link</a></p>\n<hr>';
const pageFoot = '</body></!DOCTYPE html>';


http.createServer(function(req, res){
	
	console.log(req.url);
	let currentUrl = url.parse(req.url, true);
	console.log("parsituna:" +  currentUrl.pathname);
	if(currentUrl.pathname === "/vanasona"){
		res.write(pageHead);
		res.write(pageBody);
		res.write("\n\t<p>Täna on " + dateeT.dateET() + "</p>");
		res.write(pageFoot);
		return res.end();
	}
	else if(currentUrl.pathname === "/"){
		fs.readFile(textRef, "utf-8",(err,data)=>{
			if(err){
				res.write(pageHead);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateeT.dateET() + "</p>");
				res.write(pageFoot);
				return res.end();
			}	
			else {
				res.writeHead(200, {"Content-type": "text/html"});
				res.write(pageHead);
				res.write(pageBody);
				let folkWisdom = data.split(";");
				let folkWisdomOutput = "\n\t<ol>";
				for (let i = 0; i < folkWisdom.length; i ++){
					folkWisdomOutput += "\n\t\t<li>" + folkWisdom[i] + "</li>";
				}
				folkWisdomOutput += "\n\t</ol>";
				res.write(pageHead);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateeT.dateET() + "</p>");
				res.write(pageFoot);
				return res.end();
			}
		})
	//else{
	//	res.end("error 404")
	//}
	
	}
		
	
	
	//res.writeHead(200, {"Content-type": "text/html"});
	//res.write(pageHead);
	//res.write(pageBody);
	//res.write("<p>Täna on " + dateeT.dateET() + "</p>");
	//res.write(pageFoot);
	//return res.end();

}).listen(5110);