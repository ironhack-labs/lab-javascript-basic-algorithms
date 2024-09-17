/** @format */

// Iteration 1: Names and Input
const hacker1 = "Greg"; // 1.1
const hacker2 = "Viktor"; // 1.2

console.log(`The driver's name is ${hacker1}`); // 1.3
console.log(`The navigator's name is ${hacker2}`); // 1.4

// Iteration 2: Conditionals

//2.1

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
	console.log(
		`The driver has the longest name, it has ${hacker1Length} characters.`
	);
} else if (hacker2Length > hacker1Length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker2Length} characters.`
	);
}

// Iteration 3: Loops

// 3.1

let hacker1Name = "";
for (let i = 0; i < hacker1Length; i++) {
	hacker1Name += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Name);

// 3.2

let hacker2Name = "";

for (let i = hacker2Length - 1; i >= 0; i--) {
	hacker2Name += hacker2[i];
}
console.log(hacker2Name);

// 3.3 locale.compare

const comparison = hacker1.localeCompare(`${hacker2}`);
if (comparison < 0) {
	console.log("The driver's name goes first.");
} else if (comparison > 0) {
	console.log("Yo, the navigator goes first, definitely.");
} else {
	console.log("What?! You both have the same name?");
}
