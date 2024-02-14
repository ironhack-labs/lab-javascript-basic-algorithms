// Iteration 1: Names and Input
let hacker1 = "Luis";
let hacker2 = "Felipe";

console.log(`The driver's name is ${hacker1} `);
console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals

let longHacker1 = hacker1.length;
let longHacker2 = hacker2.length;

if (longHacker1 > longHacker2) {
	console.log(
		`The driver has the longest name, it has ${longHacker1} characters.`
	);
} else if (longHacker1 < longHacker2) {
	console.log(
		`It seems that the navigator has the longest name, it has ${longHacker2} characters`
	);
} else if (longHacker1 == longHacker2) {
	console.log(
		`Wow, you both have equally long names, ${longHacker2} characters!`
	);
}

// Iteration 3: Loops

let newName = hacker1.toLocaleUpperCase();
let newName2 = newName.split("").join(" ");

console.log(newName);
console.log(newName2);

// Print all the characters of the navigator's name in reverse order, i.e.,
let nameInver = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
	nameInver += hacker1[i];
}

console.log(nameInver);

// Depending on the lexicographic order of the strings, print:

let firstLeter1 = hacker1[0];
let firstLeter2 = hacker2[0];

if (firstLeter1 < firstLeter2) {
	console.log(`The driver's name goes first.`);
} else if (firstLeter1 > firstLeter2) {
	console.log(`Yo, the navigator goes first, definitely.`);
} else if (firstLeter1 == firstLeter2) {
	console.log(`What?! You both have the same name?`);
}
