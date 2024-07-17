// Iteration 1: Names and Input

const hacker1 = "Ayrton";
const hacker2 = "Antonia";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigators name is ${hacker2}`);


// Iteration 2: Conditionals

const lenght1 = hacker1.length;
const lenght2 = hacker2.length;

if ( lenght1 > lenght2){
    console.log (`The driver has the longest name, it has ${lenght1} characters.`)
} else if (lenght1 < lenght2) {
    console.log (`It seems that the navigator has the longest name, it has ${lenght2} characters.`)
} else if (lenght1 === lenght2) {
    `Wow, you both have equally long names, ${lenght1} ${lenght2} characters!`
};



// Iteration 3: Loops

const hacker1ToUpper = hacker1.toUpperCase();
const hacker1ToUpper11 = hacker1ToUpper.slice (0, 1);
const hacker1ToUpper12 = hacker1ToUpper.slice (1, 2);
const hacker1ToUpper13 = hacker1ToUpper.slice (2, 3);
const hacker1ToUpper14 = hacker1ToUpper.slice (3, 4);
const hacker1ToUpper15 = hacker1ToUpper.slice (4, 5);
const hacker1ToUpper16 = hacker1ToUpper.slice (5, 6);
console.log(`${hacker1ToUpper11} ${hacker1ToUpper12} ${hacker1ToUpper13} ${hacker1ToUpper14} ${hacker1ToUpper15} ${hacker1ToUpper16}`);
let hacker2Reversed= "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);
const order = hacker1.localeCompare(hacker2);
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
     console.log ("What?! You both have the same name?")
};