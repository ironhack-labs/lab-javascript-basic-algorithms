// Names and Input
var hacker1 = "alex";
console.log("the driver's name is " + hacker1);

var hacker2 = window.prompt("what is the driver's name?", "name")
console.log("the navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
	console.log("the driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
	console.log("the navigator has the longest name, it has " + hacker2.length + " characters");
} else if (hacker1.length == hacker2.length) {
	console.log("wow, you both have equally long names, " + hacker1.length + " characters!");
} else {
  console.log("hmm, one of these names is invalid. please try again");
};

//Loops
var driverCaps = "";
for (let i=0; i<hacker1.length; i++) {
  driverCaps = driverCaps + hacker1[i].toUpperCase() + " ";
};

console.log(driverCaps);

var navigatorReverse = "";
for (let i=(hacker2.length-1); i>=0; i -= 1) {
  navigatorReverse = navigatorReverse + hacker2[i].toLowerCase();
};

console.log(navigatorReverse);

// name order
if (hacker1<hacker2) {
	console.log("the driver's name goes first");
} else if (hacker2<hacker1) {
	console.log("the navigator's name goes first");
} else if (hacker2==hacker1) {
	console.log("same name?! wow!");
} else {
  console.log("hmm... error");
};


// Palindromes:
/* 
approach:
1. create or use a function reversePhrase() 
	- remove spaces, special characters
	- string --> array (split)
	- array --> reverse (reverse)
2. check if phrase == reversePhrase
3. return true/ false
*/

// function reversePhrase(string) {

// }

// function removeSpecialCharacters(string) {

// }


// Lorem ipsum generator
