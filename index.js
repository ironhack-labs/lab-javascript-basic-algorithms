// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready!");
let hacker1 = "Baby";
console.log("The driver's name is " + hacker1);
let hacker2 = "Bats";
console.log("The navigator's name is " + hacker2);
var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}
var hacker1UpperCase = hacker1.toUpperCase().split('').join(' ');
console.log(hacker1UpperCase);
var hacker2Reverse = hacker2.split('').reverse().join('');
console.log(hacker2Reverse);
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}