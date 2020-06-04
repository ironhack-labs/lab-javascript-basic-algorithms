console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Toufiq";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Sarah";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

function myFunction(hacker1, hacker2){

  if (hacker1.length > hacker2.length) {
		console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
	}
	else if (hacker1.length < hacker2.length) {
		console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
	}
	else if (hacker1.length === hacker2.length) {
		console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}}
	myFunction("Toufiq", "Sarah");

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let capName = "";
for (let i = 0; i < hacker1.length; i++) {
	capName += hacker1[i] + " ";
}
console.log(capName.toUpperCase());

// Another Method
console.log(
	` This is the Driver's name in Upper Case and separate every letter ${hacker1.split("").join(" ").toUpperCase()}`);

// 3.2 Print all the characters of the navigator's name, in reverse order.

let reverseName = "";
for (let i = hacker2.length - 1; i>=0; i--) {
	reverseName += hacker2[i];
}
console.log(reverseName);

// Another Method
console.log(
	`This is the Reverse of navigator's name ${hacker2.split("").reverse().join("")}`);

// 3.3 Depending on the lexicographic order of the strings, print:

if (hacker1[0].localeCompare(hacker2[0]) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1[0].localeCompare(hacker2[0]) === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
	console.log(`What?! You both have the same name?`); 
}

// Another Method
let sorting = ["Mark", "Jon"];
console.log(`The lexicographic order of the strings are ${sorting.sort()}`);

// Bonus Time!
// Bonus 1: Go to lorem ipsum generator and:   Generate 3 parragraphs. Store the text in a String. Make your program count the number of times the latin word et appears

const str =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let numberOfWords = str.split(" ");
console.log(`The string has ${numberOfWords.length} words`);
	
console.log(`The 'et' is repeated ${str.split("et").length - 1} times`);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

let phraseToCheck = ["Ut", "madam", "racecar", "stack cats", "exercitation", "put it up", "saw", "laboris"]

function palindrome(words) {
	let p = words.split("").reverse().join("");
	if (p === words) {
		console.log (`"${words}" is a palindrome`);
	} else {
		console.log ("This word is not palindrome");
	}
}
palindrome("Ut");
palindrome("madam");
palindrome("racecar");
palindrome("exercitation");
palindrome("put it up");
palindrome("saw");
palindrome("seeds");