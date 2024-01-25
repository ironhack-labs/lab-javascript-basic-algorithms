// Iteration 1: Names and Input
const hacker1 = "ania";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "bartomelew";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
}

// Iteration 3: Loops
// print name in capital letters and space between
let formatedName = " ";
for (const character of hacker1) {
	formatedName = formatedName + character + " ";
}
console.log(formatedName.toUpperCase().trim() + " "); // trim removes the trailing space

//print name in reversed order
//solution 1
let reversedName = "";
// Iterate through each character of the string in reverse order
for (let i = hacker2.length - 1; i >= 0; i--) {
	// Concatenate each character to the reversedName variable
	reversedName += hacker2[i]; // reverName = reverName + i
}
console.log(reversedName);

// solution 2
const yourName = "ania";
let reversedNamee = "";
// Iterate through each character of the string in normal order using for...of
for (const letter of yourName) {
	// Prepend each character to the reversedName variable
	reversedNamee = letter + reversedNamee;
}
console.log(reversedNamee);

//  lexicographic order of the strings
if (hacker1 < hacker2) {
	console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
	console.log("Yo, the navigator goes first, definitely.");
} else {
	console.log("What?! You both have the same name?");
}
