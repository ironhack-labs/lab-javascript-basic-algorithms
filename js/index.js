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

if (longNina < longEnine) {
    console.log(`The navigator has the longest name, it has ${longEnine}`);
} else if (longEnine < longNina) {
    console.log(`It seems that the driver has the longest name, it has ${longNina} characters`)
} else {
    console.log(`Wow, we both have equally long names, ${longNina} characters!`);
}

// Iteration 3: Loops$

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

var hacker1Upp = hacker1.toUpperCase();
var hacker1Cut = hacker1Upp.split("");

var hacker1Array = new Array();
for (var i = 0; i < hacker1Cut.length; i++) {
    hacker1Array.push(hacker1Cut[i]);
    if (i != hacker1Cut.length - 1) {
        hacker1Array.push(" ");
    }
}
//for (i= 0; i < hacker1Upp; i++){
//console.log(i);
//}