// Iteration 1: Names and Input
const hacker1 = "Priscila";
const hacker2 = "Rodrigo";
console.log(`The driver's name is ${hacker1}`)
console.log(`the navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters `)
}
else if (lengthHacker1 < lengthHacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters`)
}
else {
    console.log(`Wow,you both have equaly long names, ${lengthacker1} characters`)
}


// Iteration 3: Loops
let hackerOneUpper = hacker1.toUpperCase().split('').join(' ');
console.log(hackerOneUpper);

let hackerReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    hackerReversed += char;
}

console.log(hackerReversed);

let order = hacker1.localeCompare(hacker2);
if (order === 1) {
    console.log("Yo, the navigator goes first, definitely.");
}
else if (order === -1) {
    console.log("The driver's name goes first.");
}
else {
    console.log("What?! You both have the same name?");
}


console.log(order);
