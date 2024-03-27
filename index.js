// Iteration 1: Names and Input
const hacker1 = "Adrian";
console.log(`The drivers's name is ${hacker1}`);
const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let hacker1UpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase();
}
console.log(hacker1UpperCase.trim());


let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

//3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: 

- `The driver's name goes first.` 
- `Yo, the navigator goes first, definitely.` 
- `What?! You both have the same name?`

if((hacker1.localeCompare(hacker2)) < 0) {
    console.log(`The driver's name goes first.`);
} else if((hacker1.localeCompare(hacker2)) > 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}
