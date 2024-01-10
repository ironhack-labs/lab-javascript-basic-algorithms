// Iteration 1: Names and Input


// Iteration 2: Conditionals
console.log("I'm ready!");

let hacker1 = "XXXX";

console.log("The driver's name is " + hacker1);

let hacker2 = "YYYY";

console.log("The navigator's name is " + hacker2);


let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
    console.log("The driver has the longest name, it has " + lengthHacker1 + " characters.");
} else if (lengthHacker1 < lengthHacker2) {
    console.log("It seems that the navigator has the longest name, it has " + lengthHacker2 + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + lengthHacker1 + " characters!");
}

let driver = "John";

let navigator = "Jane";

console.log("Driver's name: " + driver.toUpperCase().split('').join(' '));

console.log("Navigator's name: " + navigator.split('').reverse().join(''));


let comparison = driver.localeCompare(navigator);
if (comparison < 0) {
    console.log("The driver's name goes first.");
} else if (comparison > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Iteration 3: Loops
