// Iteration 1: Names and Input
//
let hacker1 = "Cristina";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Elio";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

let result = `Wow, you both have equally long names, ${hacker1Length} characters!`


if (hacker1Length > hacker2Length) {
    result = `The driver has the longest name, it has ${hacker1Length} characters.`
} else if (hacker2Length > hacker1Length) {
    result = `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
} 

console.log(result);

// Iteration 3: Loops
//3.1
const nameInCapitals = []
for (value of hacker1) {
    nameInCapitals.push(value.toUpperCase())
}
console.log(nameInCapitals.join(' '))

//3.2
let reversedName = '';
for (let i = hacker1.length -1; i >= 0; i--) {
    const elem = hacker2.charAt(i);
    reversedName += elem;
}
console.log(reversedName);

//3.3
let firstLetter1 = hacker1.charAt(0);
let firstLetter2 = hacker2.charAt(0);
let result3 = `What?! You both have the same name?`;

if ( firstLetter1 < firstLetter2) {
    result3 = `The driver's name goes first.`
} else if ( firstLetter1 > firstLetter2 ) {
    result3 = `Yo, the navigator goes first definitely.`
}
console.log(result3);



