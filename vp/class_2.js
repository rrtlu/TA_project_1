
const FirstName = "ri1";
const LastName = "ri2";
let oneRandomNumber = 0;

//console.log(FirstName + " " + LastName);
function tellAuthorsName(){
	console.log("Program author is " + FirstName + " " + LastName);
	
}


function GenerateNumberValue(){
	let newNumber =  Math.round(Math.random() * 10);
	oneRandomNumber = newNumber;
	//oneRandomNumber = newNumber;
	return newNumber;
}
//tellAuthorsName();

//oneRandomNumber = GenerateNumberValue();

//console.log("New number has been generated " + oneRandomNumber);



function dateNowFormatedET(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let dayNow = timeNow.getDay();
	const dayNamesET = ["esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev","pühapäev"];
	const monthNamesET = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"];
	
	return dayNamesET[dayNow] + "." + dateNow + "." +  monthNamesET[monthNow] + "." + yearNow;
	
}
function timeNowFormattedET(){
	let timeNow = new Date();
	let hourNow = timeNow.getMinutes();
	let minutesNow = timeNow.getMinutes();
	let secondsNow = timeNow.getSeconds();
	return hourNow + ":" + minutesNow + ":" + secondsNow;
}
//console.log(new Date());
console.log(dateNowFormatedET());
console.log(timeNowFormattedET());