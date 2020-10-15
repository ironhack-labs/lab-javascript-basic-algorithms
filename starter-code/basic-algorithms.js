// Iteration 1: Names and Input
const hacker1 = 'Jaime';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Pedro';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
	console.log(`Wow, you both have equally long names, ${hacler1.length} characters!`);
}

// Iteration 3: Loops

//3.1

let newName = hacker1.split('');

for (let i = 0; i < newName.length; i++) {
	newName[i] = newName[i].toUpperCase();
}

newName = newName.join(' ');

console.log(newName);

//3.2

let reversedName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
	reversedName = reversedName + hacker2[i];
}

console.log(reversedName);

//3.3
if (hacker1.localeCompare(hacker2) === 1) {
	console.log('Yo, the navigator goes first definitely.');
} else if (hacker1.localeCompare(hacker2) === -1) {
	console.log("The driver's name goes first.");
} else {
	console.log('What?! You both have the same name?');
}
