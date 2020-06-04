// Iteration 1: Names and Input
var hacker1 = 'Nina'
console.log(`The driver's name is ${hacker1}`);
var hacker2 = 'Enine'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// The driver has the longest name, it has XX characters. or
// It seems that the navigator has the longest name, it has XX characters. or
// Wow, you both have equally long names, XX characters!.

var longNina = hacker1.length; // 4
var longEnine = hacker2.length; // 5
var longestname =
    if (longNina < longEnine) {
        console.log(`The navigator has the longest name, it has ${longEnine}`);
    } else if (longEnine < longNina) {
    console.log(`It seems that the driver has the longest name, it has ${longNina} characters`)
} else {
    console.log(`Wow, we both have equally long names, ${longNina} characters!`);
}

// Iteration 3: Loops$