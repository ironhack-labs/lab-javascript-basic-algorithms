// Names and Input
console.log("I'm Ready!");

var hacker1 = "Samuel"; // driver
var hacker2 = prompt("What's your name ?"); // navigator


// print the navigator name
console.log(hacker2);


// which one have the longuest name ?
if(hacker1.length > hacker2.length) {
	console.log(hacker2 + " has the longest name." );
} else if(hacker1.length < hacker2.length) {
	console.log(hacker1 + " has the longest name.");
} else {
	console.log("you both got equally long names !");
}
var i = 0;
var result = "";

// first loop to capitalize each letters of the drivers name
while(i < hacker1.length ) {
	
	var str = hacker1.charAt(i);
	
	result += " " + str.toUpperCase();

i++
}
console.log(result);


// reverse the navigator name

var iTwo = 0;
var resultTwo = [];

while(iTwo < hacker2.length ) {
	
	var strTwo = hacker2.charAt(iTwo);
	
	resultTwo.push(strTwo);

iTwo++
}
// print it as a plain string
var resultTwoReversed =  resultTwo.reverse().join("").charAt(0);
// console.log(resultTwo);
console.log(resultTwoReversed);

var hackerNewName = hacker2.charAt(0).toUpperCase() + hacker2.slice(1);

var myVar = [hacker1, hackerNewName];

myVar.sort();
console.log(myVar);

// loop trough the sorterd array
// if driver go first

[ 'Nadjie', 'Abdul' ]

var iThree;
for (iTree = 0; iTree < myVar.length; iTree++) { 
if(myVar[0] === hacker1 ) {
	console.log("The driver's name goes first");
} else if () {
	console.log("Yo, the navigator goes first definitely");
}
 else (myVar[0] === myVar[1])
  console.log("What?! You both got the same name?");
} 


