// Iteration 1: Names and Input
const hacker1 = 'Vali';
const hacker2 = 'Senem';

console.log('The drivers name is ', hacker1);
console.log('The navigators name is ', hacker2);

// Iteration 2: Conditionals

const valiCharacters = hacker1.length;
const senemCharacters = hacker2.length;

console.log(valiCharacters, senemCharacters);

if (valiCharacters > senemCharacters) {
	console.log(
		`The driver has the longest name, it has ${valiCharacters} characters.`
	);
} else {
	console.log(
		`It seems that the navigator has the longest name, it has ${senemCharacters} characters.`
	);
}
// Iteration 3: Loops

const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);


for (let i=hacker2.length; i>=0; i--) {
 console.log(hacker2[i]);
}

let result = hacker1.localeCompare(hacker2);

if (result<0) {
 console.log("The driver's name goes first.")
} else if (result>0) {
 console.log("Yo, the navigator goes first definetely!")
} else {
 console.log("What, you both have the same name?")
}