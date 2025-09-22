
const fs = require("fs");

const dateeT = require("./src/datetimeET.js");

const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
	//dividing text by ;
	let oldWisdomList = rawText.split(";");
	let wisdomCount = oldWisdomList.length;
	//console.log(wisdomCount);
	//getting one random out of 35
	let wisdomOfTheDay = oldWisdomList[Math.round(Math.random() * (wisdomCount - 1))];
	console.log(wisdomOfTheDay);
	
}

function readTextFile() {
	fs.readFile(textRef , "utf-8" , (err, data)=> {
		if(err){
			console.log(err);
		} else {
			//console.log(data);
			pickOneSentence(data);
		}
	});
}
console.log("Täna on    " + dateeT.dateET());
console.log("Tänane vanasõna on:");
readTextFile(); 
console.log(dateeT.partOfDay());
setTimeout(() => {
	console.log(dateeT.timeET());
	console.log(dateeT.partOfDay());
},10);

 
