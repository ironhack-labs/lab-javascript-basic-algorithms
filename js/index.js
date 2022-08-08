// Iteration 1: Names and Input
let hacker1 = 'Jean';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Malte';

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(
		`the driver has the longest name, it has ${hacker1.length} characters`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`the driver has the longest name, it has ${hacker2.length} characters`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	);
}

// Iteration 3: Loops
let newDriverName = '';
for (let i = 0; i < hacker1.length; i++) {
	newDriverName = newDriverName + hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1);

let newNavigatorName = '';
for (let j = hacker2.length - 1; j > -1; j--) {
	newNavigatorName = newNavigatorName + hacker2[j];
}
console.log(newNavigatorName);

console.log(hacker1[0]);
console.log(hacker2[0]);
console.log(hacker1[0] < hacker2[0]);

let driver = 'jean';
let navigator = 'male';

if (hacker1[0] < hacker2[0]) {
	console.log(`The driver's name goes first.`);
} else if (hacker2[0] < hacker1[0]) {
	console.log(`Yo, the navigator goes first definitely.`);
} else {
	console.log('What?! You both have the same name?');
}
