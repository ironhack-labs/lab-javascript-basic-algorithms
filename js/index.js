// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = 'Gianluca';
let hacker2 = 'Alex';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
	console.log(`$It seems that the navigator has the longest name, it has ${hacker2.length}' characters.`);
} else if (hacker1.length === hacker2.length) {
	console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let hackerNameBySpace = '';
for (let i = 0; i < hacker1.length; i++) {
	hackerNameBySpace += hacker1[i].toUpperCase() + ' ';
}
console.log(hackerNameBySpace);

let hackerNameReverse = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
	hackerNameReverse += hacker1[i];
}
console.log(hackerNameReverse);

let message = 'What?! You both have the same name?';
if (hacker1 < hacker2) {
	message = "The driver's name goes first.";
} else if (hacker1 > hacker2) {
	message = 'Yo, the navigator goes first definitely.';
}
console.log(message);
