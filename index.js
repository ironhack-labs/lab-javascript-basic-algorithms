// Iteration 1: Names and Input
const hacker1 = 'Javi';
const hacker2 = 'Julia';

console.log(`The drive's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1

let hacker1UpperCase = '';
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase() + ' ';
}
console.log(hacker1UpperCase.trim());

// 3.2

let reverseName = '';
for (let i = hacker1.length-1; i >= 0; i--) {
    reverseName += hacker1[i];
}
console.log(reverseName);

// 3.2

const hacker1Lower = hacker1.toLowerCase();
const hacker2Lower = hacker2.toLowerCase();

if (hacker1Lower < hacker2Lower) {
    console.log(`The driver's name goes first.`);
} else if (hacker1Lower > hacker2Lower) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`)  
}
