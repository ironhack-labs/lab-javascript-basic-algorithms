// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

const hacker1 = 'Menatalla';
const hacker2 = 'Matt';

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

/*if (hacker1.length > hacker2.length){
console.log("The driver has the longest name")
}*/

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log('Both names have the same length.');
}

console.log(hacker1.toUpperCase());

let inputString = 'Menatalla';
let spacedString = inputString.split('').join(' ');

console.log(spacedString);

console.log(hacker2);
let reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

const a = 'Menatalla';
const b = 'Matt';
console.log(a.localeCompare(b));
console.log(b.localeCompare(a));

console.log(hacker1.localeCompare(hacker2));
console.log(hacker2.localeCompare(hacker1));

if (hacker1.localeCompare(hacker2) === 1) {
console.log("The driver's name goes first.");
}

else if (hacker2.localeCompare(hacker1) === 1){
console.log("Yo, the navigator goes first, definitely.");
}

else (hacker2.localeCompare(hacker1) === 0){
console.log("What?! You both have the same name?")
}
