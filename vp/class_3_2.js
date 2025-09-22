
const fs = require("fs");

const dateeT = require("./src/datetimeET.js");

const textRef = "txt/vanasonad.txt";

function listWisdom(rawData){
	let folkWisdom = rawData.split(";");
	for (let i = 0; i < folkWisdom.length;  i ++){
		console.log((i +1)+ ") " + folkWisdom[i]);
	}
	
}


function readTextFile() {
	fs.readFile(textRef , "utf-8" , (err, data)=> {
		if(err){
			console.log(err);
		} else {
			//console.log(data);
			listWisdom(data);
		}
	});
}

console.log("Täna on    " + dateeT.dateET());
console.log("Tänane vanasõna on:");
readTextFile(); 
setTimeout(() => {
	console.log(dateeT.timeET());
	console.log(dateeT.partOfDay());
},10);

 
