
const fs = require("fs");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
	let oldWisdomList = rawText.split(";");
	let wisdomCount = oldWisdomList.length;
	console.log(wisdomCount);
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
readTextFile(); 

