console.log("I'm ready!");

 let hacker;
 let hacker2;

 hacker = "Pepito";
 hacker2 = "Juan";

console.log(`The navigator's name is ${hacker2}`);

 function strLength(str) {
 	let counter;
	
 	counter = 0;
 	while(str[counter])
		counter++;
 	return counter;
 }

 let length1 = strLength(hacker);
 let length2 = strLength(hacker2);

 if (length1 > length2) {
	console.log(`The driver has the longest name, it has ${length1} characters`);
 }

 else if (length1 < length2) {
 	console.log(`It seems that the navigator has the longest name, it has ${length2} characters`);
 }

 else {
 	console.log(`Wow, you both have equally long names, ${length1} characters!`);
 }

function printChars(str){
	
	let newStr;
	
	str = str.toUpperCase();
	str = str.split("").join(" ");
	console.log(str);
}

printChars(hacker);

function printReverse(str){

	let strCopy = "";
	let len = strLength(str) - 1;
	let i = 0;
	
	while(len >= 0) {	
		strCopy += str[len];
		len--;
	}
	console.log(strCopy);
}

printReverse(hacker2);

function lexiOrder(str1, str2) {
	if (str1 < str2)
		console.log("The driver's name goes first.");
	else if (str2 < str1)
		console.log("Yo, the navigator goes first definitely.");
	else
		console.log("What?! You both have the same name?");
}

lexiOrder(hacker, hacker2);

//BONUS1

let text = " hola hol et et eedfuivni et e"
 function wordEtCounter(str) {
	let counter = 0;
	let etCounter = 0;

	for (let i = 0; i < str.length; i++)
	{
		if (str[i] === " ")
			counter++;
		else if (str[i] === 'e' && str[i+1] === 't')
			etCounter++;
	}
	counter++;
	return `The number of words is ${counter} and the number of 'et' is ${etCounter}`;
}

console.log(wordEtCounter(text));